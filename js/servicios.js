
/* --- Services Page Data & Logic --- */

const servicesData = {
    'cambridge': {
        title: "Exámenes de Cambridge",
        desc: "Preparación integral para B2 First, C1 Advanced y C2 Proficiency. Nos enfocamos en las cuatro habilidades clave: Reading, Writing, Listening y Speaking, con simulacros reales.",
        features: ["Evaluación de nivel inicial", "Material oficial de Cambridge", "Simulacros de examen cronometrados", "Feedback personalizado en Writing"],
        price: "Desde ₡18,000 / hora",
        image: "img/servicios/servicios_de_preparacion_para_examenes_oficiales_SUB_examenes_de_cambridge.jpeg"
    },
    'ielts': {
        title: "Preparación IELTS",
        desc: "Curso intensivo para IELTS Academic o General Training. Domina las estrategias específicas para maximizar tu puntaje en cada sección del examen.",
        features: ["Estrategias para IELTS Speaking", "Corrección detallada de ensayos", "Prácticas intensivas de Listening", "Plan de estudio a medida"],
        price: "Desde ₡22,000 / hora",
        image: "img/servicios/servicios_de_preparacion_para_examenes_oficiales_SUB_ielts.jpeg"
    },
    'material': {
        title: "Material Didáctico",
        desc: "Recursos educativos diseñados por expertos: guías de gramática, listas de vocabulario temático y ejercicios prácticos con soluciones.",
        features: ["PDFs descargables al instante", "Hojas de trabajo imprimibles", "Infografías de gramática", "Actualizaciones periódicas"],
        price: "Desde ₡8,000",
        image: "img/servicios/servicios_digitales_y_pasivos_SUB_creacion_y_venta_de_material_didactico.jpeg"
    },
    'cursos': {
        title: "Cursos Online Grabados",
        desc: "Aprende a tu propio ritmo con nuestros cursos pre-grabados. Acceso de por vida a lecciones en video, quizzes interactivos y material de apoyo.",
        features: ["Acceso 24/7", "Certificado de finalización", "Foro de dudas", "Compatible con móviles"],
        price: "Desde ₡28,000",
        image: "img/servicios/servicios_digitales_y_pasivos_general_cursos_online_grabados.jpeg"
    },
    'traduccion': {
        title: "Traducción y Corrección",
        desc: "Servicios profesionales de traducción español-inglés y corrección de estilo para documentos académicos, tesis, CVs y cartas de presentación.",
        features: ["Traducción certificada disponible", "Revisión de gramática y estilo", "Adaptación cultural", "Entrega puntual garantizada"],
        price: "Desde ₡45 / palabra",
        image: "img/servicios/servicios_especializados_y_de_apoyo_general_SUB_traduccion_y_correccion_de_textos.jpeg"
    },
    'kids': {
        title: "Niños y Adolescentes",
        desc: "Clases dinámicas y divertidas que fomentan el amor por el idioma. Utilizamos juegos, canciones y proyectos creativos para un aprendizaje natural.",
        features: ["Metodología lúdica", "Seguimiento para padres", "Grupos reducidos por edad", "Material interactivo incluido"],
        price: "₡45,000 / mes",
        image: "img/servicios/servicios_por_edad_y_tipo_de_alumno_SUB_Niños_y_Adolesentes.jpeg"
    },
    'adults': {
        title: "Adultos y Profesionales",
        desc: "Enfoque comunicativo para situaciones de la vida real y el entorno laboral. Mejora tu fluidez y confianza en reuniones, viajes y presentaciones.",
        features: ["Simulaciones de negocios", "Vocabulario profesional", "Horarios flexibles", "Networking"],
        price: "₡55,000 / mes",
        image: "img/servicios/servicios_por_edad_y_tipo_de_alumno_adultos_general_SUB_y_profesional_general_y_profesional.jpeg"
    },
    'specific': {
        title: "Inglés Fines Específicos",
        desc: "Programas diseñados para industrias concretas: Medicina, turismo, tecnología, finanzas, etc. Aprende la terminología exacta que necesitas.",
        features: ["Vocabulario técnico", "Roles de juego situacionales", "Análisis de casos reales", "Diseño curricular personalizado"],
        price: "Cotizar",
        image: "img/servicios/servicios_por_edad_y_tipo_de_alumno_SUB_ingles_para_fines_especificos.jpeg"
    },
    'individual': {
        title: "Clases Individuales",
        desc: "Atención 100% personalizada. Avanza a tu propio ritmo con un plan de estudios diseñado exclusivamente para tus objetivos y necesidades.",
        features: ["Personalización total", "Feedback inmediato", "Horario a tu medida", "Ritmo adaptativo"],
        price: "₡16,000 / hora",
        image: "img/servicios/servicios_por_modalidad_de_ensenñanza_SUB_clases_individuales.jpeg"
    },
    'group': {
        title: "Clases en Grupo",
        desc: "Aprende interactuando con otros. Grupos pequeños (máx 6 personas) para asegurar participación y feedback constante.",
        features: ["Interacción social", "Aprendizaje colaborativo", "Coste más económico", "Dinámicas grupales"],
        price: "₡8,000 / hora",
        image: "img/servicios/servicios_por_modalidad_de_ensenñanza_SUB_clases_individuales_SUB_clases_en_grupo.jpeg"
    },
    'online': {
        title: "Clases Online",
        desc: "La misma calidad de enseñanza, desde la comodidad de tu casa. Utilizamos plataformas interactivas para pizarra virtual y compartición de recursos.",
        features: ["Sin desplazamientos", "Grabación de clases opcional", "Recursos digitales integrados", "Conexión global"],
        price: "Desde ₡14,000 / hora",
        image: "img/servicios/servicios_por_modalidad_de_ensenñanza_SUB_clases_online.jpeg"
    }
};

// Modal Logic
const modal = document.getElementById('service-modal');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-description');
const modalFeatures = document.getElementById('modal-features');
const modalPrice = document.getElementById('modal-price');
const modalImage = document.getElementById('modal-image');

function openModal(serviceKey) {
    const data = servicesData[serviceKey];
    if (!data) return;

    modalTitle.textContent = data.title;
    modalDesc.textContent = data.desc;
    modalPrice.textContent = data.price;
    modalImage.src = data.image;

    // Clear and populate features
    modalFeatures.innerHTML = '';
    data.features.forEach(feature => {
        const li = document.createElement('li');
        li.textContent = feature;
        modalFeatures.appendChild(li);
    });

    modal.classList.add('open');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = ''; // Restore scrolling
}

// Close when clicking outside content
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Escape key to close
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
        closeModal();
    }
});
