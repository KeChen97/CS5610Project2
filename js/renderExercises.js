function Index() {
    const index = {};
    const exercisesDiv = document.querySelector("div.exercises");
    console.log(exercisesDiv.innerHTML);

    function renderExercises (exercises) {
        exercisesDiv.innerHTML = "";
        console.log("render exercises", exercises);
        let i = 1;
        for(let q of exercises) {
            const qDiv = document.createElement("div");
            qDiv.className = "col-sm-4 card exerciseCard";
            // if(q.Example){
            //     qDiv.innerHTML = `  
            //     <img src="${q.Example}" class="card-img-top" alt="ExampleGif"></img>
            //     `;
            // }
            // qDiv.innerHTML = `        
            //     <div class="card-body id=${id}>
            //         <h5 class="card-title"> <output>${q.Exercise}</output></h5>
            //         <div><label>Equipment: <output>${q.Equipment}</output></label></div>
            //     </div>    
            //     `;
            qDiv.innerHTML = `        
                    <h5 class="card-title"> <output>${q.Exercise}</output></h5>
                    <div><label>Equipment: <output>${q.Equipment}</output></label></div>
                `;
            if(q.Notes) {
                qDiv.innerHTML += `        
                    <div><label>Notes: <output>${q.Notes}</output></label></div>  
                `; 
            } 
                i++;
                exercisesDiv.appendChild(qDiv); 
        }
    }
    
    // Render the exercises in AddExercises Modal
    const bodyparts = ["Full Body", "Core", "Legs", "Back", "Arms"];
    const fullbodyDiv = document.querySelector("#exercises-fullbody-list");
    async function renderExercisesInModal (exercises) {
        let i = 1;
        for(let p of bodyparts) {
            const id = "bodyparts" + i;
            console.log(id);
            const bodypartDiv = document.getElementById(id);
            console.log("render List", bodypartDiv);
            bodypartDiv.innerHTML = "";
            for(let q of exercises) {
                
                const qDiv = document.createElement("div");
                qDiv.className = "col-sm-4 card addExerciseCard";
                if(q && q.MajorMuscle.includes(p)) {

                    qDiv.innerHTML = `        
                        <h5 class="card-title"> <output>${q.Exercise}</output></h5>
                        <div><label>Equipment: <output>${q.Equipment}</output></label></div>
                        <button class="addExerciseBtn" onclick="selectExercise('${q.Exercise}')">
                            <span class="material-symbols-outlined">
                                Add
                            </span>
                        </button>
                    `;                  
                    bodypartDiv.appendChild(qDiv); 
                }        
            }
            i++;
        }
        
    }

    async function fetchExercises () {
        console.log("FetchExercises");
       const res = await fetch("./getExercises");
       const exercieses = await res.json();
       renderExercises(exercieses);
       renderExercisesInModal(exercieses);
    }    
    index.fetchExercises = fetchExercises;
    return index;
}

function selectExercise (exercise) {
    if(!window['tempExerciseSelected']) {
        window['tempExerciseSelected'] = []; 
    }
    window['tempExerciseSelected'].push(exercise);

    const addedExercises = document.querySelector("div.addedExercises");
    addedExercises.innerHTML=``;
    for(let exc of window['tempExerciseSelected']) {
        console.log(`exc:${exc}`);
        const excDiv = document.createElement("div");
        excDiv.className = "row addedExercise";
        excDiv.innerHTML = `
        <h5 class="addedExercise-name"> <output>${exc}</output></h5>
        <div style="display:flex">
            <form class="addedExercise-form">
                <label> Set </label> <input class="setNum" type="number" name="setNum">
                <label> Weight </label> <input class="setNum" type="number" name="weightNum">
                <label> Reps </label> <input type="number" name="repsNum">
            </form>
            <button style="display:inline-block">
                <span class="material-symbols-outlined">
                    delete
                </span>
            </button>
        </div>
        `;
        addedExercises.appendChild(excDiv);
    }
    const wktmodal = document.querySelector(".workoutModal");
    const excmodal = document.querySelector(".exerciseModal");
    excmodal.style.display = "none";
    wktmodal.style.display = "block";
    
}

const index = Index();
// module.exports = index.fetchExercises();
index.fetchExercises();