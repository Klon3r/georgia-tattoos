type LoadingSpinnerType = {
  isLoading: boolean;
};

const LoadingSpinner = ({ isLoading }: LoadingSpinnerType) => {
  return (
    <div>
      {isLoading ? (
        <div className="scale-150">
          <svg className="h-10 w-10 animate-spin" viewBox="0 0 200 200">
            <circle
              fill="none"
              stroke-width="18"
              className="stroke-current opacity-40"
              cx="100"
              cy="100"
              r="80"
            />
            <circle
              fill="none"
              stroke-width="14"
              className="stroke-current"
              pathLength={50}
              stroke-dasharray="125"
              stroke-dashoffset="210"
              cx="100"
              cy="100"
              r="80"
            />
          </svg>
        </div>
      ) : null}
    </div>
  );
};

export default LoadingSpinner;
