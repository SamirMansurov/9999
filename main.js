import { header } from "./components/Hed";
import { reload } from "./lib/utils";
import { transaction } from "./components/Opiration";
import { card } from "./components/map";

const information = [
    {
        id: 1,
    },
];
const body = document.body
const tbody = document.querySelector('.place')
const card_place = document.querySelector('.my_cards')

reload(information, body, header)
reload(information, tbody, transaction)
reload(information, card_place, card)