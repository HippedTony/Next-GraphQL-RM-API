interface ErrorMessageProps {
  message?: string;
}
function ErrorMessage({ message = 'Something went wrong' }: ErrorMessageProps) {
  return (
    <div className="bg-red-500/10 border border-red-500 text-red-400 rounded-xl p-4">
      {message}
    </div>
  );
}

export default ErrorMessage;
