module.exports = (req, res, next) => {
  let query = req.query;
  let { limit, page } = query;
  delete query.limit;
  delete query.page;

  if (!page) page = 1;
  if (!limit) {
    limit = 30;
  }

  let skip = 0;
  limit = parseInt(limit);
  page = parseInt(page);
  if (page > 1) skip = (page - 1) * limit;

  req.query = {
    query,
    pagination: {
      page,
      limit,
      skip,
      // links: [
      //   { self: `/products?page=${page}&limit=${limit}` },
      //   { first: `/products?page=${1}&limit=${limit}` },
      //   { previous: `/products?page=${page - 1}&limit=${limit}` },
      //   { next: `/products?page=${page + 1}&limit=${limit}` },
      //   //   { last: `/products?page=${1}&limit=${limit}` },
      // ],
    },
  };

  next();
};
