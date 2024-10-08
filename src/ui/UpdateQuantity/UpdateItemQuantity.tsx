import s from "./UpdateItemQuantity.module.scss";
import { cartActions } from "../../redux/slices/CartSlice";
import { useCustomDispatch } from "../../custom-hooks/store";
import React from "react";
interface UpdateQuantity {
  id: number;
  currentQuantity: number;
}
const UpdateItemQuantity: React.FC<UpdateQuantity> = ({
  id,
  currentQuantity,
}) => {
  const dispatch = useCustomDispatch();
  return (
    <div className={s.flex}>
      <button
        onClick={() => dispatch(cartActions.decreaseQuantity(id))}
        className={s.button}
      >
        -
      </button>
      <span className={s.quantity}>{currentQuantity}</span>
      <button
        onClick={() => dispatch(cartActions.increaseQuantity(id))}
        className={s.button}
      >
        +
      </button>
    </div>
  );
};

export default UpdateItemQuantity;
