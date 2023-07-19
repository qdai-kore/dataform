module.exports = (d1) =>
{
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
];

const d = new Date(d1);

return `${monthNames[d.getMonth()]}_${d.getFullYear()}`
}

