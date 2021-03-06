const axios = require('axios')
const oauth = require('axios-oauth-client');
const NodeCache = require('node-cache');
const cache = new NodeCache();
const path = require('path')
var propertiesReader = require('properties-reader');
var properties = propertiesReader(path.join(__dirname, '..', 'application.properties'));


const domain = properties.get('env.domain')

const getOwnerCredentials = oauth.client(axios.create(), {
  url: `https://${domain}/authorizationserver/oauth/token`,
  grant_type: properties.get('app.grant_type'),
  client_id: properties.get('app.client_id'),
  client_secret: properties.get('app.client_secret'),
  username: properties.get('app.username'),
  password: properties.get('app.password')

});



const auth = async (callback, req, res) => {
  if (cache.get("key") == null) {
    const auth = await getOwnerCredentials().catch((err) => console.log("Connection Error"));
    if (auth)
      cache.set("key", auth.access_token, auth.expires_in)
  }

  callback(cache.get("key"), req, res);

}

const cmsComponents = async (key, req, res) => {
  const param = req.query
  if (param.catalogVersion == null)
    res.render('index')
  else
    axios.request({
      url: `https://${domain}/cmswebservices/v1/sites/${param.siteId}/catalogs/${param.catalog}/versions/${param.catalogVersion}/pagescontentslotscomponents?pageId=${param.pageId}`,
      headers: {
        Authorization: "Bearer " + key,
      }, rejectUnauthorized: false,
      method: 'get'

    }).then((response) => res.json({ data: response.data, siteId: param.siteId })).catch((er) => { res.json({ error: er.response.data.errors }) })
}

const cmsComponentDetails = async (key, req, res) => {

  axios.request({
    url: `https://${domain}/cmswebservices/v1/sites/${req.params.siteId}/cmsitems/${req.params.id}`,
    headers: {
      Authorization: "Bearer " + key,
    }, rejectUnauthorized: false,
    method: 'get'

  }).then((response) => { res.json({ cmsItemData: response.data }) }).catch((er) => { res.json({ error: er.response.data.errors }) })


}


const types = async (key, req, res) => {

  axios.request({
    url: `https://${domain}/cmswebservices/v1/types`,
    headers: {
      Authorization: "Bearer " + key,
    }, rejectUnauthorized: false,
    method: 'get'

  }).then((response) => { res.json({ types: response.data }) }).catch((er) => { res.json({ error: er.response.data.errors }) })


}
const sites = async (key, req, res) => {

  axios.request({
    url: `https://${domain}/cmswebservices/v1/sites`,
    headers: {
      Authorization: "Bearer " + key,
    }, rejectUnauthorized: false,
    method: 'get'

  }).then((response) => { res.json({ types: response.data }) }).catch((er) => { res.json({ error: er.response.data.errors }) })


}



const pageTemplates = async (key, req, res) => {
  const params = req.query

  axios.request({
    url: `https://${domain}/cmswebservices/v1/sites/${params.siteId}/catalogs/${params.catalog}/versions/${params.catalogVersion}/pagetemplates?pageTypeCode=${params.pageType}`,
    headers: {
      Authorization: "Bearer " + key,
    }, rejectUnauthorized: false,
    method: 'get'

  }).then((response) => { res.json({ templates: response.data, siteId: params.siteId }) }).catch((er) => { res.json({ error: er.response.data.errors }) })


}



module.exports = { auth, cmsComponents, cmsComponentDetails, types, pageTemplates, sites }