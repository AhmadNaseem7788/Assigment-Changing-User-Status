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
const ActiveUsersBox = document.querySelector(".active-user-content-box");
const InActiveUsersBox = document.querySelector(".inactive-user-content-box");

const renderUsers = (users) => {
  return users.map((user) => {
    return `
        <div class="card" >
              <h1 class="username text">${user.username}</h1>
              <p class="${
                user.isActive ? "status-active" : "status-inactive"
              } text">${user.isActive ? "Active" : "Inactive"}</p>
              <div class="button">
                <button class="btn ${
                  user.isActive ? "deactivate-user " : "activate-user"
                } text" data-user-id=${user.id}>
                  ${user.isActive ? "Deactivate the user" : "Activate the user"}
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
  const activeUser = db.filter((user) => user.isActive === true);
  const inactiveUser = db.filter((user) => user.isActive === false);
  ActiveCardContainerEl.innerHTML = renderUsers(activeUser).join("");
  InactiveCardContainerEl.innerHTML = renderUsers(inactiveUser).join("");
  ToogleStatus();

  activeUser.length === 0
    ? ActiveUsersBox.classList.add("none")
    : inactiveUser.length === 0
    ? InActiveUsersBox.classList.add("none")
    : (ActiveUsersBox.classList.remove("none"),
      InActiveUsersBox.classList.remove("none"));
};

render();
