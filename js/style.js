function submitEnquiry() {
  const name = document.getElementById('enquiry-name').value;
  const email = document.getElementById('enquiry-email').value;
  const subject = document.getElementById('enquiry-subject').value;
  const message = document.getElementById('enquiry-message').value;

  if (!name || !email || !subject || !message) {
    alert("⚠️ Please fill out all fields before submitting.");
    return;
  }

  // Send email using mailto link (basic)
  const mailtoLink = `mailto:nexwidgetsolutionsinfo@gmail.com?subject=Enquiry from ${name} - ${subject}&body=Name: ${name}%0AEmail: ${email}%0A%0A${message}`;
  window.location.href = mailtoLink;

  // Optional: clear form
  document.getElementById('enquiry-name').value = "";
  document.getElementById('enquiry-email').value = "";
  document.getElementById('enquiry-subject').value = "";
  document.getElementById('enquiry-message').value = "";
}




// === Three.js Basic Setup ===
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

const container = document.getElementById('canvas-container');
renderer.setSize(window.innerWidth, window.innerHeight);
container.appendChild(renderer.domElement);

// === Octahedron ===
const geometry2 = new THREE.OctahedronGeometry(8, 0);
const material2 = new THREE.MeshStandardMaterial({
  color: 0x7d05b8,
  wireframe: true,
  transparent: true,
  opacity: 0.5
});
const octahedron = new THREE.Mesh(geometry2, material2);
scene.add(octahedron);

// === Snub Disphenoid Geometry ===
const vertices = [
  [0.0, 0.618, 1.175], [0.0, -0.618, 1.175],
  [0.851, 0.526, 0.526], [0.851, -0.526, 0.526],
  [-0.851, 0.526, 0.526], [-0.851, -0.526, 0.526],
  [0.526, 0.851, -0.526], [0.526, -0.851, -0.526],
  [-0.526, 0.851, -0.526], [-0.526, -0.851, -0.526],
  [0.618, 1.175, 0.0], [-0.618, 1.175, 0.0],
  [0.618, -1.175, 0.0], [-0.618, -1.175, 0.0],
];
const faces = [
  [0,2,4],[0,4,10],[0,10,6],[0,6,2],
  [1,3,5],[1,5,12],[1,12,7],[1,7,3],
  [2,3,7],[2,7,6],[3,2,0],[3,0,1],
  [4,5,9],[4,9,8],[5,4,0],[5,0,1],
  [6,7,13],[6,13,8],[7,6,2],[7,2,3]
];
const flatVertices = vertices.flat();
const flatFaces = faces.flat();

const snubGeometry = new THREE.PolyhedronGeometry(flatVertices, flatFaces, 6, 0);
const snubMaterial = new THREE.MeshStandardMaterial({
  color: 0x7d05b8,
  wireframe: true,
  transparent: true,
  opacity: 0.5
});
const snubDisphenoid = new THREE.Mesh(snubGeometry, snubMaterial);
scene.add(snubDisphenoid);

// === Lighting ===
const pointLight = new THREE.PointLight(0xffffff, 1);
pointLight.position.set(20, 20, 20);
scene.add(pointLight);

const ambientLight = new THREE.AmbientLight(0x404040, 2);
scene.add(ambientLight);

camera.position.z = 30;

// === Animation Variables for Horizontal Movement ===
let clock = new THREE.Clock();

function animate() {
  requestAnimationFrame(animate);
  const time = clock.getElapsedTime();

  // Horizontal oscillation (left-right)
  octahedron.position.x = Math.sin(time) * 10;       // amplitude 10
  snubDisphenoid.position.x = Math.sin(time + Math.PI) * 10; // opposite phase

  // Rotation
  octahedron.rotation.x += 0.005;
  octahedron.rotation.y += 0.01;
  snubDisphenoid.rotation.x += 0.008;
  snubDisphenoid.rotation.y += 0.012;

  renderer.render(scene, camera);
}
animate();

// === Responsive Resize ===
window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});


        // Smooth scroll
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Form submission functions
        function submitEnquiry() {
            const name = document.getElementById('enquiry-name').value;
            const email = document.getElementById('enquiry-email').value;
            const subject = document.getElementById('enquiry-subject').value;
            const message = document.getElementById('enquiry-message').value;

            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields');
                return;
            }

            alert('Thank you for your enquiry! We will get back to you soon.');
            // Reset form
            document.getElementById('enquiry-name').value = '';
            document.getElementById('enquiry-email').value = '';
            document.getElementById('enquiry-subject').value = '';
            document.getElementById('enquiry-message').value = '';
        }

        function submitAppointment() {
            const name = document.getElementById('appt-name').value;
            const email = document.getElementById('appt-email').value;
            const phone = document.getElementById('appt-phone').value;
            const date = document.getElementById('appt-date').value;
            const time = document.getElementById('appt-time').value;
            const type = document.getElementById('appt-type').value;

            if (!name || !email || !phone || !date || !time || !type) {
                alert('Please fill in all fields');
                return;
            }

            alert(`Appointment booked successfully!\n\nName: ${name}\nDate: ${date}\nTime: ${time}\nType: ${type}\n\nWe'll send you a confirmation email shortly.`);
            // Reset form
            document.getElementById('appt-name').value = '';
            document.getElementById('appt-email').value = '';
            document.getElementById('appt-phone').value = '';
            document.getElementById('appt-date').value = '';
            document.getElementById('appt-time').value = '';
            document.getElementById('appt-type').value = '';
        }
        // Mobile Navbar Toggle
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});
const amplitude = window.innerWidth < 768 ? 5 : 10;
octahedron.position.x = Math.sin(time) * amplitude;
snubDisphenoid.position.x = Math.sin(time + Math.PI) * amplitude;
