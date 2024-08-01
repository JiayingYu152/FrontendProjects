import "./likeButton.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeartIcon = (className) => {
    return (
        <svg
          className={className}
          fill="currentColor"
          viewBox="0 0 24 24"
          width="16"
          height="16">
          <g>
            <path d="M12 21.638h-.014C9.403 21.59 1.95 14.856 1.95 8.478c0-3.064 2.525-5.754 5.403-5.754 2.29 0 3.83 1.58 4.646 2.73.814-1.148 2.354-2.73 4.645-2.73 2.88 0 5.404 2.69 5.404 5.755 0 6.376-7.454 13.11-10.037 13.157H12zM7.354 4.225c-2.08 0-3.903 1.988-3.903 4.255 0 5.74 7.034 11.596 8.55 11.658 1.518-.062 8.55-5.917 8.55-11.658 0-2.267-1.823-4.255-3.903-4.255-2.528 0-3.94 2.936-3.952 2.965-.23.562-1.156.562-1.387 0-.014-.03-1.425-2.965-3.954-2.965z"></path>
          </g>
        </svg>
      );
}
const SpinnerIcon = (className) => {
    return (
        <svg
          className={className}
          width={16}
          height={16}
          viewBox="0 0 38 38"
          xmlns="http://www.w3.org/2000/svg"
          stroke="currentColor">
          <g fill="none" fillRule="evenodd">
            <g transform="translate(1 1)" strokeWidth="2">
              <circle
                strokeOpacity=".5"
                cx="18"
                cy="18"
                r="18"
              />
              <path d="M36 18c0-9.94-8.06-18-18-18">
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from="0 18 18"
                  to="360 18 18"
                  dur="1s"
                  repeatCount="indefinite"
                />
              </path>
            </g>
          </g>
        </svg>
      );
}

const LikeButton = () => {
  const [isPending, setIsPending] = useState(false);
  const [liked, setLiked] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate(); //for navigate back to home page, not main logic relevant

  const likeUnlikeAction = async () => {
    try {
      setIsPending(true);
      setErrorMessage(null);

      const response = await fetch(
        "https://www.greatfrontend.com/api/questions/like-button",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ action: liked ? "unlike" : "like" }),
        }
      );

      if (!response.ok) {
        const res = await response.json();
        setErrorMessage(res.error);
        return;
      }

      setLiked(!liked);
    } catch (err) {
      setErrorMessage(
        `Unknown error during attempted ${err.message}. Please try again later.!`
      );
    } finally {
      setIsPending(false);
    }
  };

  return (
    <div className="like-button-container">
         <button
        style={{ position: "absolute", top: 0, left: 0 }}
        onClick={() => navigate("/")}
      >
        Going back to home page
      </button>

      <button
        className={`liked-button ${
          liked ? "liked-button--liked" : "liked-button-default"
        }`}
        disabled={isPending}
        onClick={() => {
          likeUnlikeAction();
        }}
      >
        {isPending ? <SpinnerIcon /> : <HeartIcon />}
        {liked ? "Liked" : "Like"}
      </button>
      {errorMessage && (
        <div className="like-button-error-message">{errorMessage}</div>
      )}
    </div>
  );
};

export default LikeButton;
