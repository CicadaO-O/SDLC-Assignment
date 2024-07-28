<script type="module">{
        
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
        import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
        // Your web app's Firebase configuration
        const firebaseConfig = {
            apiKey: "AIzaSyAeOQ6ybCqXaRkVMjydCYm2DFBb3k0nD-I",
            authDomain: "login-a8d4f.firebaseapp.com",
            projectId: "login-a8d4f",
            storageBucket: "login-a8d4f.appspot.com",
            messagingSenderId: "362871307907",
            appId: "1:362871307907:web:0c8e103b39841ea382e5b6"
        };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);

        //get ref to databse services
        const db = getDatabase(app);

        document.getElementById("submit").addEventListener('click', function(e){
            e.preventDefault();

            set(ref(db, 'user/' + document.getElementById("username").value),{

                username: document.getElementById("username").value,
                email: document.getElementById("email").value,
                PhoneNumber: document.getElementById("phone").value

            });
            alert("Login Successful  !");
        
        
        })
    }
</script>