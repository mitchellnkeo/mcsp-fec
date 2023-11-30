
import styles from './Card.module.css';

const Card = ({ cardData }) => {
  console.log("card data", cardData);
  console.log(cardData[0]);

  let cardOne = cardData[0];

  /* 
            //   cardData.map((card, index) => (
        //     <div
        //       key={`card${card.id}`}
        //     >
        //       <p>{card.question}</p>
        //     </div>
        //   )))


        */

  return (
    <div>
    <p className={styles.hello}>{cardOne.question}</p>
    <br></br>
      <p>{cardOne.answer}</p>
    </div>
  );
};

export default Card;