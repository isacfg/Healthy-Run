function screens() {
    if (tela == 0) { // tela inicial
        image(land, 0, 0);

        // texts
        alltexts();

        //arrow selection
        arrow();

    }

    else if (tela === 1) { // jogo

        screenPLAY();
        if (player.freezes == false) {
            gameName();
        }
    }
    else if (tela === 2) { // instruções
        screenINSTRUCTIONS();
    }
    else if (tela === 3) { // créditos
        screenCREDITS();
    }
    else if (tela == 9) {
        screenPlayground();  
    }
}

