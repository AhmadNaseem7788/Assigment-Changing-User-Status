const db = [
  {
    id: 1,
    username: "ahmad",
    isActive: true,
  },

  {
    id: 2,
    username: "kami",
    isActive: false,
  },

  {
    id: 3,
    username: "bilal bhai",
    isActive: true,
  },
  {
    id: 4,
    username: "hassan Sattar",
    isActive: true,
  },
  {
    id: 5,
    username: "zaid",
    isActive: false,
  },
  {
    id: 6,
    username: "Qasim",
    isActive: false,
  },
];
const ActiveCardContainerEl = document.querySelector(
  ".active-user-card-container"
);
const InactiveCardContainerEl = document.querySelector(
  ".inactive-user-card-container"
);

const renderActiveUsers = () => {
  return db
    .filter((user) => user.isActive === true)
    .map((user) => {
      return `<div class="card" >
                <h1 class="username text">${user.username}</h1>
                <p class="status-active text">${
                  user.isActive ? "Active" : "Inactive"
                }</p>
                <div class="button">
                  <button class="btn deactivate-user text" data-user-id=${
                    user.id
                  }>
                    ${
                      user.isActive
                        ? "Deactivate the user"
                        : "Activate the user"
                    }
                  </button>
                </div>
          </div>`;
    });
};
const renderInActiveUsers = () => {
  return db
    .filter((user) => user.isActive === false)
    .map((user) => {
      return `
          <div class="card" >
                <h1 class="username text">${user.username}</h1>
                <p class="status-inactive text">${
                  user.isActive ? "Active" : "Inactive"
                }</p>
                <div class="button">
                  <button class="btn activate-user text" data-user-id=${
                    user.id
                  }>
                    ${
                      user.isActive
                        ? "Deactivate the user"
                        : "Activate the user"
                    }
                  </button>
                </div>
              </div>
          `;
    });
};

const ToogleStatus = () => {
  const ToogleBtnEl = document.querySelectorAll(".btn");
  ToogleBtnEl.forEach((button) => {
    const cardDataSetId = button.dataset.userId;

    button.addEventListener("click", () => {
      const sinlgeCardId = db.findIndex((user) => user.id == cardDataSetId);
      db[sinlgeCardId].isActive = !db[sinlgeCardId].isActive;
      render();
    });
  });
};

const render = () => {
  ActiveCardContainerEl.innerHTML = renderUsers().join("");
  InactiveCardContainerEl.innerHTML = renderUsers().join("");
  ToogleStatus();

  if (activeUser.length === 0) {
    ActiveUsersBox.classList.add("none");
  } else {
    ActiveUsersBox.classList.remove("none");
  }
  if (inactiveUser.length === 0) {
    InActiveUsersBox.classList.add("none");
  } else {
    InActiveUsersBox.classList.remove("none");
  }
};

render();
