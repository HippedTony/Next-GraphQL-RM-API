interface EmptyStateProps {
  message: string;
}

function EmptyState({ message }: EmptyStateProps) {
  return (
    <div className="flex justify-center items-center py-20 text-slate-400 text-xl">
      {message}
    </div>
  );
}

export default EmptyState;
