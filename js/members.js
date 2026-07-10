const API_URL = "https://script.google.com/macros/s/AKfycby1pb1hb1VgUX2DgCLoM3LnpqHkdvqwajWDmHlRCmGQQ4dxuwD0gqqrxHSd1NMaG9zO/exec";


fetch(API_URL)

.then(response => response.json())

.then(data => {

    renderMembers(data);

})

.catch(error => {

    console.error(
        "Ошибка загрузки состава:",
        error
    );

});





function renderMembers(members){


    const leader =
        document.getElementById(
            "leader-container"
        );


    const tsuguko =
        document.getElementById(
            "tsuguko-container"
        );


    const instructors =
        document.getElementById(
            "instructor-container"
        );


    const fighters =
        document.getElementById(
            "fighter-container"
        );


    const kakushi =
        document.getElementById(
            "kakushi-container"
        );



    let counts = {

        hashira:0,

        instructor:0,

        fighter:0

    };





    members.forEach(member => {



        let card =
            createCard(member);




        // ШИНОБУ

        if(
            member.rank === "Столп"
        ){

            leader.appendChild(card);

            counts.hashira++;

            return;

        }





        // КАНАО

        if(
            member.name === "Канао Цуюри"
        ){

            tsuguko.appendChild(card);

            return;

        }





        // КАКУШИ

        if(
            member.type === "kakushi"
        ){

            kakushi.appendChild(card);

            return;

        }





        // ИНСТРУКТОРЫ

        if(
            member.rank === "Инструктор"
        ){

            instructors.appendChild(card);

            counts.instructor++;

            return;

        }





        // ИСТРЕБИТЕЛИ

        fighters.appendChild(card);

        counts.fighter++;


    });






    // Свободные места


    addEmptySlots(
        tsuguko,
        1,
        "❀ Цугуко ❀"
    );



    addEmptySlots(
        instructors,
        2 - counts.instructor,
        "Инструктор"
    );



    addEmptySlots(
        fighters,
        8 - counts.fighter,
        "Истребитель"
    );






    // Статистика


    document.getElementById(
        "hashira-count"
    ).innerHTML =
        counts.hashira + " / 1";



    document.getElementById(
        "tsuguko-count"
    ).innerHTML =
        "0 / 1";



    document.getElementById(
        "instructor-count"
    ).innerHTML =
        counts.instructor + " / 2";



    document.getElementById(
        "fighter-count"
    ).innerHTML =
        counts.fighter + " / 8";


}









function addEmptySlots(container, amount, title){


    for(
        let i = 0;
        i < amount;
        i++
    ){


        let card =
            document.createElement(
                "div"
            );


        card.classList.add(
            "member-card",
            "empty"
        );



        card.innerHTML = `


        <h3>

        ${title}

        </h3>


        <p>

        Свободный слот


        <br><br>


        Ожидается назначение


        </p>


        `;



        container.appendChild(card);


    }


}









function createCard(member){



    let card =
        document.createElement(
            "div"
        );


    card.classList.add(
        "member-card"
    );





    // Какуши

    if(
        member.type === "kakushi"
    ){


        card.classList.add(
            "kakushi"
        );


        card.innerHTML = `


        <h3>
        ▣ Какуши
        </h3>


        <p>

        Личность скрыта


        <br><br>


        Информация доступна
        только руководству


        <br><br>


        <b>
        Доступ ограничен
        </b>


        </p>


        `;


        return card;


    }






    // Особые карточки


    if(
        member.rank === "Столп"
    ){

        card.classList.add(
            "leader"
        );

    }



    if(
        member.name === "Канао Цуюри"
    ){

        card.classList.add(
            "tsuguko"
        );

    }








    let lessons = "";



    if(member.lessons){


        let pmpProgress =
            member.lessons.pmp
            ? 1
            : 0;



        let poisonProgress =
            member.lessons.poison || 0;





        lessons = `


        <div class="lessons">


        <h4>
        ❀ Лекции ❀
        </h4>




        <p>
        ПМП
        </p>


        ${createProgress(
            pmpProgress,
            1
        )}




        <p>
        Яды
        </p>


        ${createProgress(
            poisonProgress,
            3
        )}




        </div>


        `;


    }









    card.innerHTML = `


    <h3>

    ${member.name}

    </h3>




    <p>


    <b>Ранг:</b>

    ${member.rank}



    <br><br>




    <b>Discord:</b>

    ${member.discord}



    <br><br>




    <b>Выговоры:</b>

    ${member.warnings}



    <br><br>




    <b>Steam ID:</b>

    ${member.steam}



    </p>




    ${lessons}



    `;




    return card;


}









function createProgress(current, max){



    let percent =
        (current / max) * 100;



    return `


    <div class="progress-wrapper">


        <div class="progress-border">


            <div 
            class="progress-fill"
            style="width:${percent}%">
            </div>


        </div>



        <span class="progress-text">

        ${current}/${max}

        </span>


    </div>


    `;


}