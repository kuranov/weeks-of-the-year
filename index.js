const year = 2023;
const weeksCount = 52;
const weeksContainer = document.querySelector('#weeks-container');
const yearInTitle = document.querySelector('#year-in-title');

const e = (tagName, props = {}, html = null) => {
  const element = document.createElement('div');

  for (const propKey in props) {
      element[propKey] = props[propKey];
  }

  if (html) {
    element.innerHTML = html;
  }

  return element;
}

const addWeek = (container, num, date) => {
  const month = date.toLocaleString('default', { month: 'short' });
  const formattedDate = `${date.getDate()} ${month}`;

  const weekDiv = e(
    'div',
    { className: 'week'},
    `<h2 class="week-number">${num}</h2>
          <div class="week-date">${formattedDate}</div>`
  );
  container.appendChild(weekDiv);
};

const dateStartOfWeek = (weekNum) => {
  const startOfTheWeek = new Date(year, 0, 1);
  startOfTheWeek.setDate((weekNum * 7) + 1);
  return startOfTheWeek;
}

// Render

yearInTitle.innerText = year;

for (let i = 0; i < weeksCount; i++) {
  addWeek(weeksContainer, weeksCount - i, dateStartOfWeek(i));
}
