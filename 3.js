function getUniqueStr(str) {
  return [...new Set(str.split(","))].join(",");
}

module.exports = {
  getUniqueStr,
};
