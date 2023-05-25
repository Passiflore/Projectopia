// import { useState } from 'react'
import { connect } from "react-redux";
import Cards from "../Cards/Cards";
import "./CardContainer.css";
import { CHANGE_STATUT_ACTION, CardState } from "@/store/cardReducer.ts";
import { RootState } from "@/store";
import { Dispatch } from "redux";

interface CardContainerProps {
  title: "ToDo" | "InProgress" | "Completed";
  cards: any[];
  onChange: (
    card: CardState,
    newStatus: "ToDo" | "InProgress" | "Completed"
  ) => void;
}

const CardContainer: React.FC<CardContainerProps> = ({
  cards,
  title,
  onChange,
}) => {
  return (
    <div className="cardContainer">
      <div className="cardContainerTitle">
        <h3>{title}</h3>
        <div className="addButton">
          <svg
            width="21"
            height="22"
            viewBox="0 0 21 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.0606 3.11285C10.3171 3.11285 10.5631 3.21853 10.7444 3.40662C10.9258 3.59472 11.0277 3.84983 11.0277 4.11584V9.79941H16.5079C16.7644 9.79941 17.0104 9.90508 17.1917 10.0932C17.3731 10.2813 17.475 10.5364 17.475 10.8024C17.475 11.0684 17.3731 11.3235 17.1917 11.5116C17.0104 11.6997 16.7644 11.8054 16.5079 11.8054H11.0277V17.4889C11.0277 17.755 10.9258 18.0101 10.7444 18.1982C10.5631 18.3863 10.3171 18.4919 10.0606 18.4919C9.80409 18.4919 9.5581 18.3863 9.37674 18.1982C9.19537 18.0101 9.09348 17.755 9.09348 17.4889V11.8054H3.61327C3.35678 11.8054 3.1108 11.6997 2.92943 11.5116C2.74807 11.3235 2.64618 11.0684 2.64618 10.8024C2.64618 10.5364 2.74807 10.2813 2.92943 10.0932C3.1108 9.90508 3.35678 9.79941 3.61327 9.79941H9.09348V4.11584C9.09348 3.84983 9.19537 3.59472 9.37674 3.40662C9.5581 3.21853 9.80409 3.11285 10.0606 3.11285Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <div className="CardProject">
        {cards.map((card) => {
          if (card.status === title) {
            return <Cards key={card.id} card={card} onChange={onChange} />;
          } else {
            return null;
          }
        })}
      </div>
    </div>
  );
};

export const CardContainerStore = connect(
  (state: RootState) => ({
    cards: state.cards,
  }),
  (dispatch: Dispatch) => ({
    onChange: (
      card: CardState,
      newStatus: "ToDo" | "InProgress" | "Completed"
    ) =>
      dispatch({
        type: CHANGE_STATUT_ACTION,
        payload: { ...card, status: newStatus },
      }),
  })
)(CardContainer);
