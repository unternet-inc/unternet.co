module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('assets');
  // eleventyConfig.ignores.add('docs/**');
  // eleventyConfig.addPassthroughCopy({ 'docs/dist': 'docs' });
};
