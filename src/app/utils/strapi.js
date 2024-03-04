export const getEntries = async (page) => {
  try {
    const res = await fetch(`http://localhost:1337/api/${page}?populate=*`, {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.STRAPI_API}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log(err);
  }
};
