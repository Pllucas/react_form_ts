//CSS
import './ReviewForm.css'

//EMOJIS
import {
  BsFillEmojiHeartEyesFill,
  BsFillEmojiSmileFill,
  BsFillEmojiNeutralFill,
  BsFillEmojiFrownFill,
} from "react-icons/bs";

type ReviewForm = {
  data:{
    review: string,
    comment: string
  }
  updateFieldHandler: (key:string, value:string) => void}

const ReviewForm = ({data, updateFieldHandler}: ReviewForm) => {
  const handleReviewChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateFieldHandler("review", event.target.value)
  }

  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateFieldHandler("comment", event.target.value)
  }
  return (
    <div className='review-form'>
      <div className='form-review'>
        <div className='form-control score-container'>
          <label className='radio-container'>
            <input type="radio" value="unsatisfied" name="review" required checked={data.review === "unsatisfied"} onChange={handleReviewChange} />
            <BsFillEmojiFrownFill/>
            <p>Insatisfeito</p>
          </label>
        </div>
        <div className='form-control score-container'>
          <label className='radio-container'>
            <input type="radio" value="neutral" name="review" required checked={data.review === "neutral"} onChange={handleReviewChange} />
            <BsFillEmojiNeutralFill/>
            <p>Poderia ser melhor</p>
          </label>
        </div>
        <div className='form-control score-container'>
          <label className='radio-container'>
            <input type="radio" value="satisfied" name="review" required checked={data.review === "satisfied"} onChange={handleReviewChange} />
            <BsFillEmojiSmileFill/>
            <p>Satisfeito</p>
          </label>
        </div>
        <div className='form-control score-container'>
          <label className='radio-container'>
            <input type="radio" value="very_satisfied" name="review" required checked={data.review === "very_satisfied"} onChange={handleReviewChange} />
            <BsFillEmojiHeartEyesFill/>
            <p>Muito satisfeito</p>
          </label>
        </div>
      </div>
      <div className='form-control'>
        <label htmlFor="comment">Comentário:</label>
        <textarea name="comment" id="comment" placeholder='conte como foi sua experiência com o produto...' value={data.comment || ""} onChange={handleCommentChange}></textarea>
      </div>
    </div>
  )
}

export default ReviewForm