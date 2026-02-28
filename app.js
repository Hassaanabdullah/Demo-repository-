const authShell = document.getElementById("authShell");
const switchModeBtn = document.getElementById("switchModeBtn");
const heroTitle = document.getElementById("heroTitle");
const heroText = document.getElementById("heroText");
const inlineSwitches = document.querySelectorAll(".inline-switch");

function updateContent() {
    const signupVisible = authShell.classList.contains("show-signup");
    switchModeBtn.textContent = signupVisible ? "Already registered? Log in" : "Need an account? Create one";
    heroTitle.textContent = signupVisible ? "Create your new account today" : "Welcome back to your workspace";
    heroText.textContent = signupVisible
        ? "Join Aurora Access to organize your work, collaborate faster, and stay productive."
        : "Sign in to manage projects, track progress, and keep your team aligned in one place.";
}

function toggleMode() {
    authShell.classList.toggle("show-signup");
    updateContent();
}

switchModeBtn.addEventListener("click", toggleMode);
inlineSwitches.forEach((button) => button.addEventListener("click", toggleMode));
updateContent();
