import Delete from "../../assets/Icons/trash-alt-regular.svg";
import Left from "../../assets/Icons/caret-left-solid.svg";
import Right from "../../assets/Icons/caret-right-solid.svg";
import Like from "../../assets/Icons/thumbs-up-regular.svg";
import Dislike from "../../assets/Icons/thumbs-down-regular.svg";

const iconSize = "20"

const Card = (props) => {
  return (
    <div class="RetroCard" aria-label="Retro card">
      <textarea
        class="textbox"
        placeholder="Enter text here"
        aria-label="Enter text here"
        rows="1"
        value={props.content}
        onChange={(e) => props.update(e, props.id, "content")}
      ></textarea>

      <div class="button-group">
        <button
          type="button"
          class="button button-left"
          title="Move left"
          onClick={() => props.moveCard(props.id, "left")}
        >
          <img src={Left} alt="Move left" width={iconSize} height={iconSize}/>
        </button>
        <button
          type="button"
          class="button button-delete"
          title="Delete"
          onClick={() => props.removeCard(props.id)}
        >
          <img src={Delete} alt="Delete" width={iconSize} height={iconSize} />
        </button>
        <div>
          <button
            type="button"
            class="button button-left"
            title="Like"
            onClick={(e) => props.update(e, props.id, "likes")}
          >
            <img src={Like} alt="Like" width={iconSize} height={iconSize} />
          </button>
          {props.likes}
          <button
            type="button"
            class="button button-left"
            title="Dislike"
            onClick={(e) => props.update(e, props.id, "dislikes")}
          >
            <img src={Dislike} alt="Dislike" width={iconSize} height={iconSize} />
          </button>
          {props.dislikes}
          <button
            type="button"
            class="button button-right"
            title="Move right"
            onClick={() => props.moveCard(props.id, "right")}
          >
            <img src={Right} alt="Move right" width={iconSize} height={iconSize} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
