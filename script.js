let skillCount = 1;
let experienceCount = 1;
function addSkill() {
  skillCount++;
  const container = document.getElementById("skillEntries");
  const newEntry = `
<div id="skill${skillCount}">
  <label for="skill${skillCount}">Skill:<span>&#149;</span><span>&#149;</span></label>
  <input
    type="text"
    id="skill${skillCount}"
    name="skill${skillCount}"
    required
  />
  <label for="skillPercentage${skillCount}"
    >Percentage:<span>&#149;</span><span>&#149;</span></label
  >
  <input
    type="number"
    id="skillPercentage${skillCount}"
    name="skillPercentage${skillCount}"
    required
  /><br /><br />
</div>
`;
  container.insertAdjacentHTML("beforeend", newEntry);
}
let educationCount = 1;
function addEducation() {
  educationCount++;
  const container = document.getElementById("educationEntries");
  const newEntry = `
<div id="education${educationCount}">
  <label for="eduStartDate${educationCount}">Start Date:<span>&#149;</span></label>
  <input
    type="date"
    id="eduStartDate${educationCount}"
    name="eduStartDate${educationCount}"
    required
  />
  <label for="eduEndDate${educationCount}">End Date:<span>&#149;</span></label>
  <input
    type="date"
    id="eduEndDate${educationCount}"
    name="eduEndDate${educationCount}"
    required
  /><br /><br />

  <label for="degree${educationCount}">Degree:<span>&#149;</span></label>
  <input
    type="text"
    id="degree${educationCount}"
    name="degree${educationCount}"
    required
  /><br /><br />

  <label for="institution${educationCount}">Institution:<span>&#149;</span></label>
  <input
    type="text"
    id="institution${educationCount}"
    name="institution${educationCount}"
    required
  /><br /><br />

  <label for="eduDescription${educationCount}">Description:<span>&#149;</span></label><br />
  <textarea
    id="eduDescription${educationCount}"
    name="eduDescription${educationCount}"
    rows="4"
    cols="50"
    required
  ></textarea
  ><br /><br />
</div>
`;
  container.insertAdjacentHTML("beforeend", newEntry);
}
function addExperience() {
  experienceCount++;
  const container = document.getElementById("experienceEntries");
  const newEntry = `
<div id="experience${experienceCount}">
  <label for="startDate${experienceCount}"
    >Start Date:<span>&#149;</span></label
  >
  <input
    type="date"
    id="startDate${experienceCount}"
    name="startDate${experienceCount}"
    required
  />
  <label for="endDate${experienceCount}">End Date:<span>&#149;</span></label>
  <input
    type="date"
    id="endDate${experienceCount}"
    name="endDate${experienceCount}"
    required
  /><br /><br />

  <label for="company${experienceCount}">Company:<span>&#149;</span></label>
  <input
    type="text"
    id="company${experienceCount}"
    name="company${experienceCount}"
    required
  /><br /><br />

  <label for="position${experienceCount}">Position:<span>&#149;</span></label>
  <input
    type="text"
    id="position${experienceCount}"
    name="position${experienceCount}"
    required
  /><br /><br />

  <label for="description${experienceCount}"
    >Description:<span>&#149;</span></label
  ><br />
  <textarea
    id="description${experienceCount}"
    name="description${experienceCount}"
    rows="4"
    cols="50"
    required
  ></textarea
  ><br /><br />
</div>
`;
  container.insertAdjacentHTML("beforeend", newEntry);
}
document
  .getElementById("resumeForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const form = document.getElementById("resumeForm");
    const formData = new FormData(form);
    const name = formData.get("name");
    const headline = formData.get("headline");
    const Linkedin = formData.get("LL");
    const about = formData.get("about");
    const imgFile = formData.get("image");
    const reader = new FileReader();
    const skills = [];
    for (let i = 1; i <= skillCount; i++) {
      const skill = formData.get(`skill${i}`);
      const skillPercentage = formData.get(`skillPercentage${i}`);
      if (skill && skillPercentage) {
        skills.push({ skill, skillPercentage });
      }
    }
    const experiences = [];
    for (let i = 1; i <= experienceCount; i++) {
      const startDate = formData.get(`startDate${i}`);
      const endDate = formData.get(`endDate${i}`);
      const company = formData.get(`company${i}`);
      const position = formData.get(`position${i}`);
      const description = formData.get(`description${i}`);
      if (startDate && endDate && company && position && description) {
        experiences.push({
          startDate,
          endDate,
          company,
          position,
          description,
        });
      }
    }
    const educations = [];
    for (let i = 1; i <= educationCount; i++) {
      const eduStartDate = formData.get(`eduStartDate${i}`);
      const eduEndDate = formData.get(`eduEndDate${i}`);
      const degree = formData.get(`degree${i}`);
      const institution = formData.get(`institution${i}`);
      const eduDescription = formData.get(`eduDescription${i}`);
      if (
        eduStartDate &&
        eduEndDate &&
        degree &&
        institution &&
        eduDescription
      ) {
        educations.push({
          eduStartDate,
          eduEndDate,
          degree,
          institution,
          eduDescription,
        });
      }
    }
    reader.onload = function () {
      const imgData = reader.result;
      const template = `
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${name}-Resume</title>
    <meta name="description" content="Resume of ${name}" />
        <link rel="icon" href="images/favicon.ico" />
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat:400,700,200"
      rel="stylesheet"
    />
    <link
      href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css"
      rel="stylesheet"
    />
    <link href="css/aos.css" rel="stylesheet" />
    <link href="css/bootstrap.min.css" rel="stylesheet" />
    <link href="styles/main.css" rel="stylesheet" />
  </head>
  <body id="top">
    <header>
      <div class="profile-page sidebar-collapse">
        <nav
          class="navbar navbar-expand-lg fixed-top navbar-transparent bg-primary"
          color-on-scroll="400"
        >
          <div class="container">
            <div class="navbar-translate">
              <a class="navbar-brand" href="#" rel="tooltip">${name}</a>
              <button
                class="navbar-toggler navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navigation"
                aria-controls="navigation"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-bar bar1"></span>
                <span class="navbar-toggler-bar bar2"></span>
                <span class="navbar-toggler-bar bar3"></span>
              </button>
            </div>
            <div
              class="collapse navbar-collapse justify-content-end"
              id="navigation"
            >
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link smooth-scroll" href="#about">About</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link smooth-scroll" href="#skill">Skills</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link smooth-scroll" href="#experience"
                    >Experience</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>

    <div class="page-content"></div>

    <div class="profile-page">
      <div class="wrapper">
        <div class="page-header page-header-small" filter-color="green">
          <div
            class="page-header-image"
            data-parallax="true"
            style="background-image: url('images/cc-bg-1.jpg')"
          ></div>
          <div class="container">
            <div class="content-center">
              <div class="cc-profile-image">
                <a href="#"><img src="${imgData}" alt="Image" /></a>
              </div>
              <div class="h2 title">${name}</div>
              <p class="category text-white">${headline}</p>
            </div>
          </div>
          <div class="section">
            <div class="container">
              <div class="button-container">
                <a
                  class="btn btn-default btn-round btn-lg btn-icon"
                  href="https://www.linkedin.com/in/${Linkedin}"
                  rel="tooltip"
                  title="Linkedin Profile"
                  ><i class="fa fa-linkedin"></i
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section" id="about">
      <div class="container">
        <div class="card" data-aos="fade-up" data-aos-offset="10">
          <div class="row">
            <div class="col-lg-12 col-md-12">
              <div class="card-body">
                <div class="h4 mt-0 title">About</div>
                <p>${about}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section" id="skill">
      <div class="container">
        <div class="h4 text-center mb-4 title">Professional Skills</div>
        <div
          class="card"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <div class="card-body">
            <div class="row">
              ${skills
                .map(
                  (skill, index) => `
              <div class="col-md-6">
                <div class="progress-container progress-primary">
                  <span class="progress-badge">${skill.skill}</span>
                  <div class="progress">
                    <div
                      class="progress-bar progress-bar-primary"
                      data-aos="progress-full"
                      data-aos-offset="10"
                      data-aos-duration="2000"
                      role="progressbar"
                      aria-valuenow="60"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      style="width: ${skill.skillPercentage}%"
                    ></div>
                    <span class="progress-value"
                      >${skill.skillPercentage}%</span
                    >
                  </div>
                </div>
              </div>
              `
                )
                .join("")}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section" id="experience">
      <div class="container cc-experience">
        <div class="h4 text-center mb-4 title">Work Experience</div>
        ${experiences
          .map(
            (experience, index) => `
        <div
          class="card"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <div class="row">
            <div
              class="col-md-3 bg-primary"
              data-aos="fade-right"
              data-aos-offset="50"
              data-aos-duration="500"
            >
              <div class="card-body cc-experience-header">
                <p>${experience.startDate} - ${experience.endDate}</p>
                <div class="h5">${experience.company}</div>
              </div>
            </div>
            <div
              class="col-md-9"
              data-aos="fade-left"
              data-aos-offset="50"
              data-aos-duration="500"
            >
              <div class="card-body">
                <div class="h5">${experience.position}</div>
                <p>${experience.description}</p>
              </div>
            </div>
          </div>
        </div>
        `
          )
          .join("")}
      </div>
    </div>
    <div class="section" id="education">
      <div class="container cc-education">
        <div class="h4 text-center mb-4 title">Education</div>
        ${educations
          .map(
            (education, index) => `
        <div class="card">
          <div class="row">
            <div
              class="col-md-3 bg-primary"
              data-aos="fade-right"
              data-aos-offset="50"
              data-aos-duration="500"
            >
              <div class="card-body cc-education-header">
                <p>${education.eduStartDate} - ${education.eduEndDate}</p>
                <div class="h5">${education.degree}</div>
              </div>
            </div>
            <div
              class="col-md-9"
              data-aos="fade-left"
              data-aos-offset="50"
              data-aos-duration="500"
            >
              <div class="card-body">
                <div class="h5">${education.institution}</div>
                <p>${education.eduDescription}</p>
              </div>
            </div>
          </div>
        </div>
        `
          )
          .join("")}
      </div>
    </div>
    <footer class="footer">
      <div class="container text-center">
        <a href="#" class="cc-facebook btn btn-link">
          <i class="fa fa-telegram fa-2x" aria-hidden="true"></i>
        </a>
        <a href="#" class="cc-instagram btn btn-link">
          <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
        </a>
        <a href="#" class="cc-google-plus btn btn-link">
          <i class="fa fa-google-plus fa-2x" aria-hidden="true"></i>
        </a>
        <a href="#" class="cc-twitter btn btn-link">
          <i class="fa fa-github fa-2x" aria-hidden="true"></i>
        </a>
      </div>
      <div class="h4 title text-center">
        <a
          href="https://www.linkedin.com/in/mohanakrishnan-s-1591b2203/"
          target="_blank"
        >
          MohaN
        </a>
      </div>
      <div class="text-center text-muted">
        <p>&copy; MohaN. All rights reserved.</p>
      </div>
    </footer>
    <script src="js/core/jquery.3.2.1.min.js"></script>
    <script src="js/core/popper.min.js"></script>
    <script src="js/core/bootstrap.min.js"></script>
    <script src="js/now-ui-kit.js?v=1.1.0"></script>
    <script src="js/aos.js"></script>
    <script src="scripts/main.js"></script>
  </body>
</html>
`;

      const newWindow = window.open();
      newWindow.document.open();
      newWindow.document.write(template);
      newWindow.document.close();
    };
    reader.readAsDataURL(imgFile);
  });
