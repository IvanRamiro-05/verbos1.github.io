// Base de datos de verbos irregulares
const irregularVerbs = [
    { spanish: "ser/estar", infinitive: "be", past: "was/were", participle: "been" },
    { spanish: "Golpear cosa", infinitive: "beat", past: "beat", participle: "beaten" },
    { spanish: "convertirse", infinitive: "become", past: "became", participle: "become" },
    { spanish: "comenzar", infinitive: "begin", past: "began", participle: "begun" },
    { spanish: "doblar", infinitive: "bend", past: "bent", participle: "bent" },
    { spanish: "morder", infinitive: "bite", past: "bit", participle: "bitten" },
    { spanish: "soplar", infinitive: "blow", past: "blew", participle: "blown" },
    { spanish: "romper", infinitive: "break", past: "broke", participle: "broken" },
    { spanish: "traer", infinitive: "bring", past: "brought", participle: "brought" },
    { spanish: "construir", infinitive: "build", past: "built", participle: "built" },
    { spanish: "quemar", infinitive: "burn", past: "burned/burnt", participle: "burned/burnt" },
    { spanish: "estallar", infinitive: "burst", past: "burst", participle: "burst" },
    { spanish: "comprar", infinitive: "buy", past: "bought", participle: "bought" },
    { spanish: "poder", infinitive: "can", past: "could", participle: "been able" },
    { spanish: "atrapar", infinitive: "catch", past: "caught", participle: "caught" },
    { spanish: "elegir", infinitive: "choose", past: "chose", participle: "chosen" },
    { spanish: "venir", infinitive: "come", past: "came", participle: "come" },
    { spanish: "costar", infinitive: "cost", past: "cost", participle: "cost" },
    { spanish: "cortar", infinitive: "cut", past: "cut", participle: "cut" },
    { spanish: "cavar", infinitive: "dig", past: "dug", participle: "dug" },
    { spanish: "hacer", infinitive: "do", past: "did", participle: "done" },
    { spanish: "dibujar", infinitive: "draw", past: "drew", participle: "drawn" },
    { spanish: "soñar", infinitive: "dream", past: "dreamed/dreamt", participle: "dreamed/dreamt" },
    { spanish: "beber", infinitive: "drink", past: "drank", participle: "drunk" },
    { spanish: "conducir", infinitive: "drive", past: "drove", participle: "driven" },
    { spanish: "comer", infinitive: "eat", past: "ate", participle: "eaten" },
    { spanish: "caer", infinitive: "fall", past: "fell", participle: "fallen" },
    { spanish: "alimentar", infinitive: "feed", past: "fed", participle: "fed" },
    { spanish: "sentir", infinitive: "feel", past: "felt", participle: "felt" },
    { spanish: "luchar", infinitive: "fight", past: "fought", participle: "fought" },
    { spanish: "encontrar", infinitive: "find", past: "found", participle: "found" },
    { spanish: "volar", infinitive: "fly", past: "flew", participle: "flown" },
    { spanish: "olvidar", infinitive: "forget", past: "forgot", participle: "forgotten" },
    { spanish: "perdonar", infinitive: "forgive", past: "forgave", participle: "forgiven" },
    { spanish: "congelar", infinitive: "freeze", past: "froze", participle: "frozen" },
    { spanish: "obtener", infinitive: "get", past: "got", participle: "got" },
    { spanish: "dar", infinitive: "give", past: "gave", participle: "given" },
    { spanish: "ir", infinitive: "go", past: "went", participle: "gone/been" },
    { spanish: "crecer", infinitive: "grow", past: "grew", participle: "grown" },
    { spanish: "colgar", infinitive: "hang", past: "hung", participle: "hanged/hung" },
    { spanish: "tener", infinitive: "have", past: "had", participle: "had" },
    { spanish: "oír", infinitive: "hear", past: "heard", participle: "heard" },
    { spanish: "esconder", infinitive: "hide", past: "hid", participle: "hidden" },
    { spanish: "golpear persona", infinitive: "hit", past: "hit", participle: "hit" },
    { spanish: "sostener", infinitive: "hold", past: "held", participle: "held" },
    { spanish: "herir", infinitive: "hurt", past: "hurt", participle: "hurt" },
    { spanish: "mantener", infinitive: "keep", past: "kept", participle: "kept" },
    { spanish: "arrodillarse", infinitive: "kneel", past: "knelt", participle: "knelt" },
    { spanish: "saber", infinitive: "know", past: "knew", participle: "known" },
    { spanish: "colocar", infinitive: "lay", past: "laid", participle: "laid" },
    { spanish: "dirigir", infinitive: "lead", past: "led", participle: "led" },
    { spanish: "aprender", infinitive: "learn", past: "learned/learnt", participle: "learned/learnt" },
    { spanish: "dejar", infinitive: "leave", past: "left", participle: "left" },
    { spanish: "prestar", infinitive: "lend", past: "lent", participle: "lent" },
    { spanish: "permitir", infinitive: "let", past: "let", participle: "let" },
    { spanish: "yacer", infinitive: "lie", past: "lay", participle: "lain" },
    { spanish: "encender", infinitive: "light", past: "lit", participle: "lit" },
    { spanish: "perder", infinitive: "lose", past: "lost", participle: "lost" },
    { spanish: "hacer", infinitive: "make", past: "made", participle: "made" },
    { spanish: "significar", infinitive: "mean", past: "meant", participle: "meant" },
    { spanish: "encontrarse", infinitive: "meet", past: "met", participle: "met" },
    { spanish: "deber", infinitive: "must", past: "had to", participle: "had to" },
    { spanish: "pagar", infinitive: "pay", past: "paid", participle: "paid" },
    { spanish: "poner", infinitive: "put", past: "put", participle: "put" },
    { spanish: "leer", infinitive: "read", past: "read", participle: "read" },
    { spanish: "montar", infinitive: "ride", past: "rode", participle: "ridden" },
    { spanish: "sonar", infinitive: "ring", past: "rang", participle: "rung" },
    { spanish: "elevarse", infinitive: "rise", past: "rose", participle: "risen" },
    { spanish: "correr", infinitive: "run", past: "ran", participle: "run" },
    { spanish: "decir", infinitive: "say", past: "said", participle: "said" },
    { spanish: "ver", infinitive: "see", past: "saw", participle: "seen" },
    { spanish: "vender", infinitive: "sell", past: "sold", participle: "sold" },
    { spanish: "enviar", infinitive: "send", past: "sent", participle: "sent" },
    { spanish: "establecer", infinitive: "set", past: "set", participle: "set" },
    { spanish: "sacudir", infinitive: "shake", past: "shook", participle: "shaken" },
    { spanish: "brillar", infinitive: "shine", past: "shone", participle: "shone" },
    { spanish: "disparar", infinitive: "shoot", past: "shot", participle: "shot" },
    { spanish: "mostrar", infinitive: "show", past: "showed", participle: "shown" },
    { spanish: "cerrar", infinitive: "shut", past: "shut", participle: "shut" },
    { spanish: "cantar", infinitive: "sing", past: "sang", participle: "sung" },
    { spanish: "hundir", infinitive: "sink", past: "sank", participle: "sunk" },
    { spanish: "sentarse", infinitive: "sit", past: "sat", participle: "sat" },
    { spanish: "dormir", infinitive: "sleep", past: "slept", participle: "slept" },
    { spanish: "deslizar", infinitive: "slide", past: "slid", participle: "slid" },
    { spanish: "oler", infinitive: "smell", past: "smelled/smelt", participle: "smelled/smelt" },
    { spanish: "hablar", infinitive: "speak", past: "spoke", participle: "spoken" },
    { spanish: "gastar", infinitive: "spend", past: "spent", participle: "spent" },
    { spanish: "derramar", infinitive: "spill", past: "spilled/spilt", participle: "spilled/spilt" },
    { spanish: "estropear", infinitive: "spoil", past: "spoiled/spoilt", participle: "spoiled/spoilt" },
    { spanish: "estar de pie", infinitive: "stand", past: "stood", participle: "stood" },
    { spanish: "robar", infinitive: "steal", past: "stole", participle: "stolen" },
    { spanish: "pegar", infinitive: "stick", past: "stuck", participle: "stuck" },
    { spanish: "nadar", infinitive: "swim", past: "swam", participle: "swum" },
    { spanish: "tomar", infinitive: "take", past: "took", participle: "taken" },
    { spanish: "enseñar", infinitive: "teach", past: "taught", participle: "taught" },
    { spanish: "rasgar", infinitive: "tear", past: "tore", participle: "torn" },
    { spanish: "contar", infinitive: "tell", past: "told", participle: "told" },
    { spanish: "pensar", infinitive: "think", past: "thought", participle: "thought" },
    { spanish: "lanzar", infinitive: "throw", past: "threw", participle: "thrown" },
    { spanish: "entender", infinitive: "understand", past: "understood", participle: "understood" },
    { spanish: "despertar", infinitive: "wake", past: "woke", participle: "woken" },
    { spanish: "llevar puesto", infinitive: "wear", past: "wore", participle: "worn" },
    { spanish: "ganar", infinitive: "win", past: "won", participle: "won" },
    { spanish: "escribir", infinitive: "write", past: "wrote", participle: "written" }
];
// Variables globales
let currentQuestionIndex = 0;
let score = 0;
let answeredQuestions = 0;
let feedbackTimer = null;
let isShowingFeedback = false; // Nueva variable para controlar el estado del feedback
const feedbackDuration = 300000; // 300 segundos (5 minutos)

// Elementos DOM
const questionContainer = document.getElementById('questionContainer');
const results = document.getElementById('results');
const quizContainer = document.getElementById('quizContainer');
const finalScore = document.getElementById('finalScore');
const totalVerbs = document.getElementById('totalVerbs');
const percentageScore = document.getElementById('percentageScore');
const progressBar = document.getElementById('progressBar');
const restartButton = document.getElementById('restartButton');
const currentQuestionSpan = document.getElementById('currentQuestion');
const totalQuestionsSpan = document.getElementById('totalQuestions');
const currentScoreSpan = document.getElementById('currentScore');
const answeredQuestionsSpan = document.getElementById('answeredQuestions');
const nextInstruction = document.getElementById('nextInstruction');

// Función para iniciar el quiz
function initQuiz() {
    // Restablecer variables
    currentQuestionIndex = 0;
    score = 0;
    answeredQuestions = 0;
    isShowingFeedback = false;
    
    // Restablecer la interfaz
    results.style.display = 'none';
    quizContainer.style.display = 'block';
    progressBar.style.width = '0%';
    
    // Mostrar el número total de verbos
    totalVerbs.textContent = irregularVerbs.length;
    totalQuestionsSpan.textContent = irregularVerbs.length;
    currentScoreSpan.textContent = score;
    answeredQuestionsSpan.textContent = answeredQuestions;
    
    // Mostrar la primera pregunta
    showQuestion(currentQuestionIndex);
    
    // Actualizar la barra de progreso
    updateProgressBar();
}

// Función para mostrar una pregunta
function showQuestion(index) {
    questionContainer.innerHTML = '';
    currentQuestionSpan.textContent = index + 1;
    isShowingFeedback = false;
    
    const verb = irregularVerbs[index];
    
    // Crear la pregunta
    const questionText = document.createElement('div');
    questionText.className = 'verb-question';
    questionText.innerHTML = `<span class="question-number">${index + 1}</span> ¿Cómo se dice "${verb.spanish}" en los 3 tiempos gramaticales?`;
    
    // Etiquetas de los tiempos verbales
    const tensesLabels = document.createElement('div');
    tensesLabels.className = 'tense-labels';
    tensesLabels.innerHTML = `
        <span>Infinitivo (Base Form)</span>
        <span>Pasado Simple (Past)</span>
        <span>Participio (Participle)</span>
    `;
    
    // Crear los inputs
    const inputsContainer = document.createElement('div');
    inputsContainer.className = 'verb-inputs';
    
    // Crear los 3 inputs para cada tiempo verbal
    const formNames = ['infinitive', 'past', 'participle'];
    formNames.forEach((form, formIndex) => {
        const inputDiv = document.createElement('div');
        inputDiv.className = 'verb-input';
        
        const input = document.createElement('input');
        input.type = 'text';
        input.id = `${form}-input`;
        input.placeholder = form.charAt(0).toUpperCase() + form.slice(1);
        
        // Añadir evento keydown para cada input
        input.addEventListener('keydown', function(event) {
            // Solo procesar si no estamos en modo feedback
            if (!isShowingFeedback) {
                if (event.key === 'Enter') {
                    // Si es el último input, verificar respuesta
                    if (formIndex === formNames.length - 1) {
                        checkAnswer();
                    } else {
                        // Si no es el último, pasar al siguiente input
                        document.getElementById(`${formNames[formIndex + 1]}-input`).focus();
                    }
                }
            }
        });
        
        inputDiv.appendChild(input);
        inputsContainer.appendChild(inputDiv);
    });
    
    // Agregar el elemento de feedback detallado
    const feedbackElement = document.createElement('div');
    feedbackElement.className = 'feedback-container';
    feedbackElement.id = 'feedback-container';
    feedbackElement.style.display = 'none';
    
    // Crear el div para el feedback general
    const generalFeedback = document.createElement('div');
    generalFeedback.className = 'general-feedback';
    generalFeedback.id = 'general-feedback';
    
    // Crear divs para feedback específico de cada tiempo verbal
    const specificFeedback = document.createElement('div');
    specificFeedback.className = 'specific-feedback';
    specificFeedback.id = 'specific-feedback';
    
    // Añadir los elementos de feedback al contenedor
    feedbackElement.appendChild(generalFeedback);
    feedbackElement.appendChild(specificFeedback);
    
    // Agregar todo al DOM
    questionContainer.appendChild(questionText);
    questionContainer.appendChild(tensesLabels);
    questionContainer.appendChild(inputsContainer);
    questionContainer.appendChild(feedbackElement);
    
    // Enfocar el primer input
    document.getElementById('infinitive-input').focus();
    
    // Establecer manejador de eventos global para toda la página
    document.addEventListener('keydown', globalKeyHandler);
}

// Función de manejo de teclas global
function globalKeyHandler(event) {
    // Si estamos en modo feedback, permitir saltar con espacio
    if (isShowingFeedback) {
        if (event.key === ' ' || event.code === 'Space') {
            moveToNextQuestion();
            event.preventDefault(); // Evitar comportamiento predeterminado del espacio
        }
    }
}

// Función para verificar la respuesta actual
function checkAnswer() {
    // Si ya estamos mostrando feedback, no hacer nada
    if (isShowingFeedback) return;
    
    const infinitiveInput = document.getElementById('infinitive-input');
    const pastInput = document.getElementById('past-input');
    const participleInput = document.getElementById('participle-input');
    const feedbackContainer = document.getElementById('feedback-container');
    const generalFeedback = document.getElementById('general-feedback');
    const specificFeedback = document.getElementById('specific-feedback');
    
    // Limpiar cualquier temporizador existente
    if (feedbackTimer) {
        clearTimeout(feedbackTimer);
    }
    
    // Activar el modo feedback
    isShowingFeedback = true;
    
    const verb = irregularVerbs[currentQuestionIndex];
    
    const infinitiveCorrect = infinitiveInput.value.trim().toLowerCase() === verb.infinitive;
    const pastCorrect = pastInput.value.trim().toLowerCase() === verb.past;
    const participleCorrect = participleInput.value.trim().toLowerCase() === verb.participle;
    
    // Incrementar el contador de preguntas respondidas
    answeredQuestions++;
    answeredQuestionsSpan.textContent = answeredQuestions;
    
    // Verificar si todas son correctas
    if (infinitiveCorrect && pastCorrect && participleCorrect) {
        generalFeedback.className = 'general-feedback correct';
        generalFeedback.textContent = '¡Correcto! ¡Muy bien!';
        score++;
        currentScoreSpan.textContent = score;
        
        // Añadir clases para marcar los inputs como correctos
        infinitiveInput.classList.add('correct-input');
        pastInput.classList.add('correct-input');
        participleInput.classList.add('correct-input');
    } else {
        generalFeedback.className = 'general-feedback incorrect';
        generalFeedback.textContent = 'Revisa los campos marcados:';
        
        // Limpiar el contenedor de feedback específico
        specificFeedback.innerHTML = '';
        
        // Crear un div para cada feedback específico
        const forms = [
            { name: 'Infinitivo', input: infinitiveInput, correct: infinitiveCorrect, correctValue: verb.infinitive, userValue: infinitiveInput.value.trim() },
            { name: 'Pasado', input: pastInput, correct: pastCorrect, correctValue: verb.past, userValue: pastInput.value.trim() },
            { name: 'Participio', input: participleInput, correct: participleCorrect, correctValue: verb.participle, userValue: participleInput.value.trim() }
        ];
        
        forms.forEach(form => {
            // Añadir clase al input según si es correcto o no
            if (form.correct) {
                form.input.classList.add('correct-input');
            } else {
                form.input.classList.add('incorrect-input');
                
                // Crear elemento de feedback específico
                const feedbackItem = document.createElement('div');
                feedbackItem.className = 'feedback-item';
                
                // Obtener el valor ingresado por el usuario
                const userValue = form.userValue.toLowerCase();
                
                // Generar mensaje de retroalimentación específico
                let errorExplanation = '';
                
                // Análisis de errores comunes
                if (userValue === '') {
                    errorExplanation = 'No has introducido ningún valor.';
                } else if (userValue === form.correctValue.split('/')[0] && form.correctValue.includes('/')) {
                    errorExplanation = 'Has puesto solo una de las formas correctas.';
                } else {
                    // Verificar si el usuario confundió el tiempo verbal
                    const allForms = [verb.infinitive, verb.past, verb.participle];
                    for (let i = 0; i < allForms.length; i++) {
                        const possibleForms = allForms[i].split('/');
                        for (let j = 0; j < possibleForms.length; j++) {
                            if (userValue === possibleForms[j]) {
                                const formNames = ['infinitivo', 'pasado', 'participio'];
                                errorExplanation = `Has usado la forma del ${formNames[i]} "${userValue}" en lugar del ${form.name.toLowerCase()}.`;
                                break;
                            }
                        }
                        if (errorExplanation) break;
                    }
                    
                    // Si no se encontró un error específico, dar un mensaje general
                    if (!errorExplanation) {
                        errorExplanation = `Error: "${verb.spanish}" en ${form.name.toLowerCase()} es "${form.correctValue}".`;
                    }
                }
                
                feedbackItem.innerHTML = `
                    <span class="form-name">${form.name}:</span>
                    <span class="user-value">${userValue || '(vacío)'}</span>
                    <span class="correction-arrow">→</span>
                    <span class="correct-value">${form.correctValue}</span>
                    <p class="error-explanation">${errorExplanation}</p>
                `;
                
                specificFeedback.appendChild(feedbackItem);
                
                // Actualizar el valor del input con la respuesta correcta
                form.input.value = form.correctValue;
            }
        });
    }
    
    // Mostrar el feedback
    feedbackContainer.style.display = 'block';
    
    // Deshabilitar los inputs
    infinitiveInput.disabled = true;
    pastInput.disabled = true;
    participleInput.disabled = true;
    
    // Crear botón para continuar
    const nextButton = document.createElement('button');
    nextButton.id = 'next-button';
    nextButton.className = 'next-button';
    nextButton.textContent = 'Siguiente';
    nextButton.addEventListener('click', function() {
        moveToNextQuestion();
    });
    
    // Añadir botón al contenedor de feedback
    feedbackContainer.appendChild(nextButton);
    
    // Actualizar la instrucción de continuar
    nextInstruction.textContent = "Presiona ESPACIO o haz clic en Siguiente para continuar";
    
    // Iniciar temporizador para avanzar automáticamente después de un tiempo
    feedbackTimer = setTimeout(function() {
        // Comprobar si el feedback sigue visible antes de avanzar
        if (isShowingFeedback) {
            moveToNextQuestion();
        }
    }, feedbackDuration);
    
    // Añadir contador regresivo
    const timerElement = document.createElement('div');
    timerElement.id = 'feedback-timer';
    timerElement.className = 'feedback-timer';
    feedbackContainer.appendChild(timerElement);
    
    // Iniciar cuenta regresiva visual
    let timeLeft = feedbackDuration / 1000;
    const countdownInterval = setInterval(function() {
        timeLeft--;
        if (timeLeft <= 0 || !isShowingFeedback) {
            clearInterval(countdownInterval);
        } else {
            timerElement.textContent = `Siguiente pregunta en ${timeLeft} segundos`;
        }
    }, 1000);
    
    // Actualizar la barra de progreso
    updateProgressBar();
}

// Función para avanzar a la siguiente pregunta
function moveToNextQuestion() {
    // Verificar si estamos en modo feedback
    if (!isShowingFeedback) return;
    
    // Limpiar cualquier temporizador existente
    if (feedbackTimer) {
        clearTimeout(feedbackTimer);
        feedbackTimer = null;
    }
    
    // Remover el event listener global
    document.removeEventListener('keydown', globalKeyHandler);
    
    // Desactivar el modo feedback
    isShowingFeedback = false;
    
    // Añadir una ligera animación de transición al feedback
    const feedbackContainer = document.getElementById('feedback-container');
    feedbackContainer.style.transition = 'opacity 0.3s ease-out';
    feedbackContainer.style.opacity = '0';
    
    // Esperar a que termine la animación antes de continuar
    setTimeout(() => {
        // Incrementar el índice de la pregunta actual
        currentQuestionIndex++;
        
        // Verificar si se han respondido todas las preguntas
        if (currentQuestionIndex >= irregularVerbs.length) {
            // Mostrar resultados finales
            showResults();
        } else {
            // Mostrar la siguiente pregunta
            showQuestion(currentQuestionIndex);
            
            // Restablecer la instrucción
            nextInstruction.textContent = "";
        }
    }, 300); // Tiempo de la animación
}

// Función para actualizar la barra de progreso
function updateProgressBar() {
    const progress = (answeredQuestions / irregularVerbs.length) * 100;
    progressBar.style.width = `${progress}%`;
    
    // Cambiar el color según el porcentaje de aciertos
    if (answeredQuestions > 0) {
        const percentage = (score / answeredQuestions) * 100;
        if (percentage < 50) {
            progressBar.style.backgroundColor = '#dc3545'; // Rojo
        } else if (percentage < 80) {
            progressBar.style.backgroundColor = '#ffc107'; // Amarillo
        } else {
            progressBar.style.backgroundColor = '#28a745'; // Verde
        }
    }
}

// Función para mostrar los resultados finales
function showResults() {
    // Actualizar la puntuación
    finalScore.textContent = score;
    
    // Calcular y mostrar el porcentaje
    const percentage = (score / irregularVerbs.length) * 100;
    percentageScore.textContent = `Porcentaje: ${percentage.toFixed(1)}%`;
    
    // Ocultar el quiz y mostrar los resultados
    quizContainer.style.display = 'none';
    results.style.display = 'block';
    
    // Añadir mensaje según el resultado
    let messageElement = document.createElement('p');
    if (percentage < 50) {
        messageElement.textContent = 'Necesitas practicar más. ¡No te rindas!';
    } else if (percentage < 80) {
        messageElement.textContent = '¡Buen trabajo! Sigue practicando para mejorar.';
    } else {
        messageElement.textContent = '¡Excelente! Tienes un gran dominio de los verbos irregulares.';
    }
    results.insertBefore(messageElement, document.getElementById('restartButton'));
}

// Evento para reiniciar el quiz
restartButton.addEventListener('click', function() {
    // Eliminar mensaje adicional si existe
    const messageElement = results.querySelector('p:not(#percentageScore)');
    if (messageElement && messageElement !== percentageScore) {
        messageElement.remove();
    }
    
    // Reiniciar el quiz
    initQuiz();
});

// Iniciar el quiz
initQuiz();