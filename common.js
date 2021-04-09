function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function createCookie(name, value, domain, maxAge) {
  document.cookie = `${name}=${value}; ${domain != "" ? "domain=" + domain : ""}; max-age=${maxAge}`;
}

function removeCookie(name) {
  document.cookie = `${name}=;expires=${new Date(0).toUTCString()}`
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}

function getCookieDomain(env) {
  return env == "dev"
    ? "127.0.0.1"
    // : "d1vgss7vefr705.cloudfront.net";
    : "animal-vueapp.s3-website.ap-northeast-2.amazonaws.com";
}

function getKakaoRedirectUrl(env) {
  return env == "dev"
    ? "http://127.0.0.1:5500/redirect.html"
    // : "https://d1vgss7vefr705.cloudfront.net/redirect.html";  
    : "http://animal-vueapp.s3-website.ap-northeast-2.amazonaws.com/redirect.html";
}

function getAuthBaseUrl(env) {
  return env == "dev"
    ? "http://localhost:7070"
    : "http://ec2-13-124-190-225.ap-northeast-2.compute.amazonaws.com:7070";
}

function getEnvironment() {
  const hostname = window.location.hostname;

  let profile = "prod";
  if (hostname == "127.0.0.1" || hostname == "localhost") {
    profile = "dev"
  }

  return profile;
  // return "prod";
}