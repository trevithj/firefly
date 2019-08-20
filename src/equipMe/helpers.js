export const toReactForm = prop => {
  const pa = prop.split('-').map((s, i) => {
    if (i === 0) return s.toLowerCase();
    const sa = s.split();
    sa[0] = sa[0].toUpperCase();
    return sa.join();
  });
  console.log(`${prop} ---> ${pa}`);
  return pa.join();
};

export const s2o = styleString => {
  const sa = styleString.split(';');
  const obj = {};
  sa.forEach(pair => {
    const [sKey, value] = pair.split(':');
    const key = sKey; //toReactForm(sKey);
    obj[key] = value;
  });
  return obj;
};
