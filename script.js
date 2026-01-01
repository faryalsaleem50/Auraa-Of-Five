import supabase from "./config.js";

// --- 1. SIGNUP LOGIC ---
const signupForm = document.getElementById('signup-form');

if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Page refresh hone se rokta hai

        // HTML se values uthana
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        // Supabase function call
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    full_name: name
                }
            }
        });

        if (error) {
            alert("Signup Error: " + error.message);
        } else {
            alert("Account Created Successfully! Now please login.");
            
            // UI Switch: Login form dikhane ke liye checkbox ko click kar deta hai
            document.getElementById('form-switch').checked = true;
            
            // Form khali karne ke liye
            signupForm.reset();
        }
    });
}

// --- 2. LOGIN LOGIC ---
const loginForm = document.getElementById('login-form');

if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        if (error) {
            alert("Login Failed: " + error.message);
        } else {
            alert("Login Successful! Welcome to CorePlay.");
            
            // User ko main website par bhej dena
            window.location.href = "website.html"; 
        }
    });
}