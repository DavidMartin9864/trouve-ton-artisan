const StarRating = ({ note }) => {
  const full  = Math.floor(note);
  const half  = note % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <span className="stars" aria-label={`Note : ${note} sur 5`}>
      {'★'.repeat(full)}
      {half ? '½' : ''}
      <span style={{opacity:.3}}>{'★'.repeat(empty)}</span>
      <small className="text-muted ms-1">({note}/5)</small>
    </span>
  );
};
export default StarRating;