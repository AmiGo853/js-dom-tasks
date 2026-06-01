// BEGIN
export default (url) => {
  location.href = url;
  return `${navigator.appCodeName}/${navigator.appVersion.split(' ')[0]} ${url}`;
};
// END