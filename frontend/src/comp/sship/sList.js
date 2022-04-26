import sReuse from './sReuse'

const sList = ({scholarships, handleDelete}) => {
  return (
    <ul>
        {scholarships.map((scholarships) => (
          <sReuse 
          key={scholarships.id}
          scholarships={scholarships}
          handleDelete={handleDelete}
          />
        ))}
    </ul>
  )
}
 export default sList