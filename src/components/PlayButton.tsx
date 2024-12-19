import IconCenter from "../Utils/IconCenter";

const PlayButton =
  () =>
  ({
    handleRunVisualizer,
    isDisabled,
    isGraphVisualized,
  }: {
    isDisabled: boolean;
    isGraphVisualized: boolean;
    handleRunVisualizer: () => void;
  }) => {
    const { PlayIcon, ResetIcon } = IconCenter;
    return (
      <button
        disabled={isDisabled}
        onClick={handleRunVisualizer}
        className=" disabled:pointer-events-none disabled:opacity-50 transition ease-in rounded-full p-2.5 shadow-md"
      >
        {isGraphVisualized ? (
          <img src={PlayIcon} className="size-10" />
        ) : (
          <img src={ResetIcon} className="size-10" />
        )}
      </button>
    );
  };

export default PlayButton;
