const ulSexFilterList$ = document.querySelector('.sex__filter-list')
const ulCompanyFilterList$ = document.querySelector('.company__filter-list')
const divUserCard$ = document.querySelector('.app__user-cards')

const searchInput$ = document.querySelector('.app__search__input')
const divFilters$ = document.querySelector('.app__filters')
const divTags$ = document.querySelector('.app__tags')

const parser = new DOMParser();

const view = {
  data: {
    tags: [],
    users: [
      {
        id: 1,
        name: "Leanne Graham",
        sex: "M",
        username: "Bret",
        email: "Sincere@april.biz",
        address: {
          street: "Kulas Light",
          suite: "Apt. 556",
          city: "Gwenborough",
          zipcode: "92998-3874",
          geo: {
            lat: "-37.3159",
            lng: "81.1496"
          }
        },
        phone: "1-770-736-8031 x56442",
        website: "hildegard.org",
        company: {
          name: "Romaguera-Crona",
          catchPhrase: "Multi-layered client-server neural-net",
          bs: "harness real-time e-markets"
        }
      },
      {
        id: 2,
        name: "Ervin Howell",
        sex: "M",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        address: {
          street: "Victor Plains",
          suite: "Suite 879",
          city: "Wisokyburgh",
          zipcode: "90566-7771",
          geo: {
            lat: "-43.9509",
            lng: "-34.4618"
          }
        },
        phone: "010-692-6593 x09125",
        website: "anastasia.net",
        company: {
          name: "Deckow-Crist",
          catchPhrase: "Proactive didactic contingency",
          bs: "synergize scalable supply-chains"
        }
      },
      {
        id: 3,
        name: "Clementine Bauch",
        sex: "F",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        address: {
          street: "Douglas Extension",
          suite: "Suite 847",
          city: "McKenziehaven",
          zipcode: "59590-4157",
          geo: {
            lat: "-68.6102",
            lng: "-47.0653"
          }
        },
        phone: "1-463-123-4447",
        website: "ramiro.info",
        company: {
          name: "Romaguera-Jacobson",
          catchPhrase: "Face to face bifurcated interface",
          bs: "e-enable strategic applications"
        }
      },
      {
        id: 4,
        name: "Patricia Lebsack",
        sex: "F",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
        address: {
          street: "Hoeger Mall",
          suite: "Apt. 692",
          city: "South Elvis",
          zipcode: "53919-4257",
          geo: {
            lat: "29.4572",
            lng: "-164.2990"
          }
        },
        phone: "493-170-9623 x156",
        website: "kale.biz",
        company: {
          name: "Robel-Corkery",
          catchPhrase: "Multi-tiered zero tolerance productivity",
          bs: "transition cutting-edge web services"
        }
      },
      {
        id: 5,
        name: "Chelsey Dietrich",
        sex: "F",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
        address: {
          street: "Skiles Walks",
          suite: "Suite 351",
          city: "Roscoeview",
          zipcode: "33263",
          geo: {
            lat: "-31.8129",
            lng: "62.5342"
          }
        },
        phone: "(254)954-1289",
        website: "demarco.info",
        company: {
          name: "Keebler LLC",
          catchPhrase: "User-centric fault-tolerant solution",
          bs: "revolutionize end-to-end systems"
        }
      },
      {
        id: 6,
        name: "Mrs. Dennis Schulist",
        sex: "F",
        username: "Leopoldo_Corkery",
        email: "Karley_Dach@jasper.info",
        address: {
          street: "Norberto Crossing",
          suite: "Apt. 950",
          city: "South Christy",
          zipcode: "23505-1337",
          geo: {
            lat: "-71.4197",
            lng: "71.7478"
          }
        },
        phone: "1-477-935-8478 x6430",
        website: "ola.org",
        company: {
          name: "Considine-Lockman",
          catchPhrase: "Synchronised bottom-line interface",
          bs: "e-enable innovative applications"
        }
      },
      {
        id: 7,
        name: "Kurtis Weissnat",
        sex: "F",
        username: "Elwyn.Skiles",
        email: "Telly.Hoeger@billy.biz",
        address: {
          street: "Rex Trail",
          suite: "Suite 280",
          city: "Howemouth",
          zipcode: "58804-1099",
          geo: {
            lat: "24.8918",
            lng: "21.8984"
          }
        },
        phone: "210.067.6132",
        website: "elvis.io",
        company: {
          name: "Johns Group",
          catchPhrase: "Configurable multimedia task-force",
          bs: "generate enterprise e-tailers"
        }
      },
      {
        id: 8,
        name: "Nicholas Runolfsdottir V",
        sex: "M",
        username: "Maxime_Nienow",
        email: "Sherwood@rosamond.me",
        address: {
          street: "Ellsworth Summit",
          suite: "Suite 729",
          city: "Aliyaview",
          zipcode: "45169",
          geo: {
            lat: "-14.3990",
            lng: "-120.7677"
          }
        },
        phone: "586.493.6943 x140",
        website: "jacynthe.com",
        company: {
          name: "Abernathy Group",
          catchPhrase: "Implemented secondary concept",
          bs: "e-enable extensible e-tailers"
        }
      },
      {
        id: 9,
        name: "Glenna Reichert",
        sex: "F",
        username: "Delphine",
        email: "Chaim_McDermott@dana.io",
        address: {
          street: "Dayna Park",
          suite: "Suite 449",
          city: "Bartholomebury",
          zipcode: "76495-3109",
          geo: {
            lat: "24.6463",
            lng: "-168.8889"
          }
        },
        phone: "(775)976-6794 x41206",
        website: "conrad.com",
        company: {
          name: "Yost and Sons",
          catchPhrase: "Switchable contextually-based project",
          bs: "aggregate real-time technologies"
        }
      },
      {
        id: 10,
        name: "Clementina DuBuque",
        sex: "F",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
        address: {
          street: "Kattie Turnpike",
          suite: "Suite 198",
          city: "Lebsackbury",
          zipcode: "31428-2261",
          geo: {
            lat: "-38.2386",
            lng: "57.2232"
          }
        },
        phone: "024-648-3804",
        website: "ambrose.net",
        company: {
          name: "Hoeger LLC",
          catchPhrase: "Centralized empowering task-force",
          bs: "target end-to-end models"
        }
      }
    ],
    searchParams: {
      text: "",
      filters: []
    }
  }
}

function filterOptionsTemplate(tag) {
  return `<li class="app__filter-option" 
            id="id-filter-${tag.key}-${tag.value.trim().toLowerCase()}"
            data-key="${tag.key}"
            data-value="${tag.value}">
    ${tag.value} <span class="remove--option" data-key="${tag.key}" data-value="${tag.value}">[X]</span>
  </li>`
}

function tagTemplate(tag) {
  return `<li class="app__tag" data-key="${tag.key}" data-value="${tag.value}">${tag.value}</li>`
}

function userCardTemplate(user) {
  return `<div class="user-card" data-id="${user.id}">
    <div class="user-card__info">${user.name} (${user.email})</div>
    <div class="user-card__detail">
      <p class="user-card__item">
        Org: ${user.company.name} <br>
        Address : ${user.address.street} ${user.address.suite} 
                  (${user.address.zipcode})
      </p>
    </div>
  </div>`
}

function extractTags(users) {
  const sexes = new Set();
  const companies = new Set();
  const newTags = [];

  users.forEach(user => {
    companies.add(user.company.name);
    sexes.add(user.sex);
  });

  companies.forEach(companyName => {
    newTags.push({ key: "company", value: companyName });
  });

  sexes.forEach(sex => {
    newTags.push({ key: "sex", value: sex });
  });

  return newTags;
}

function buildDivTagsDom(tags) {
  const companyHtmlTmpl = tags.filter(tag => tag.key === 'company').map(tag => tagTemplate(tag));
  const sexHtmlTmpl = tags.filter(tag => tag.key === 'sex').map(tag => tagTemplate(tag));

  ulCompanyFilterList$.innerHTML = companyHtmlTmpl.join("");
  ulSexFilterList$.innerHTML = sexHtmlTmpl.join("");
}

function buildDivUserCardDom(users) {
  const cardsAsHtml = users.map(user => userCardTemplate(user));
  divUserCard$.innerHTML = cardsAsHtml.join("");
}

function buildDivFilterDom(filterOption) {
  const filtersAsText = filterOptionsTemplate(filterOption);
  const filtersAsHtml = parser.parseFromString(filtersAsText, "text/html");
  console.log(filtersAsHtml.n)
  divTags$.append(...filtersAsHtml.childNodes);
}

function addFilterOption(filterOption) {
  view.data.searchParams.filters.push(filterOption);
  buildDivFilterDom(filterOption);
}

function removeFilterOption(filterOption) {
  const idx = view.data.searchParams.filters.findIndex(option =>
    option.value === filterOption.value &&
    option.key === filterOption.key);
  view.data.searchParams.filters.splice(idx, 1);

  const domId = `id-filter-${filterOption.key}-${filterOption.value.trim().toLowerCase()}`;
  document.getElementById(domId).remove();
}

function triggerSearch() {
  console.log(view.data.searchParams)
}

function initialize() {
  const tags = extractTags(view.data.users);
  buildDivTagsDom(tags);
  buildDivUserCardDom(view.data.users);

  searchInput$.addEventListener("input", function (event) {
    event.preventDefault();
    view.data.searchParams.text = event.target.value;

    triggerSearch();
  });

  divFilters$.addEventListener("click", function (event) {
    event.preventDefault();

    const potentialTagElement$ = divFilters$.querySelectorAll('.app__tag');
    const hasMatch = Array.prototype.indexOf.call(potentialTagElement$, event.target) >= 0;
    if (hasMatch) {
      addFilterOption({ key: event.target.dataset.key, value: event.target.dataset.value });
    }

    triggerSearch();
  });

  divTags$.addEventListener("click", function (event) {
    event.preventDefault();

    const potentialTagElement$ = divTags$.querySelectorAll('.remove--option');
    const hasMatch = Array.prototype.indexOf.call(potentialTagElement$, event.target) >= 0;
    if (hasMatch) {
      removeFilterOption({ key: event.target.dataset.key, value: event.target.dataset.value });
      triggerSearch();
    }

  });
}

initialize();