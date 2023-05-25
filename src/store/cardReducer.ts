import { AnyAction } from "redux";

// interface CardStatusAction {
//     type: typeof CHANGE_STATUT_ACTION;
//     payload: {
//         id: number;
//         status: string
//     };
// }

export type CardState = {
  id: number;
  title: string;
  description: string;
  toDo: string[];
  tags: string[];
  status: string;
};

export const initialState: CardState[] = [
  {
    id: 1,
    title: "Design nouveau logo",
    description:
      "Voir des éléments visuels tels que des feuilles, des symboles d'énergie renouvelable ...",
    toDo: ["Idée", "Sketch", "Couleur"],
    tags: ["Design", "Charte graphique", "Refonte"],
    status: "InProgress",
  },
];

export const CHANGE_STATUT_ACTION = "CHANGE_STATUT_ACTION";

export function CardReducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    case CHANGE_STATUT_ACTION:
      return state.map((card) => {
        if (card.id === action.payload.id) {
          return { ...card, ...action.payload };
        } else {
          return card;
        }
      });
    default:
      return state;
  }
}
