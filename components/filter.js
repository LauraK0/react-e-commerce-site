import { useForm } from 'react-hook-form';

const Filter = (props) => {
  const { register, handleSubmit } = useForm();
  const { publisher, setPublisher, allPublishers } = props;

  return (
    <form
      onSubmit={handleSubmit((data) => {
        setPublisher(data);
      })}
    >
      <select {...register('filter')}>
        <option value="all">All</option>
        {allPublishers.map((publisher) => (
          <option key={publisher.id} value={publisher.name}>
            {publisher.name}
          </option>
        ))}
      </select>
      <button type="submit">Filter</button>
    </form>
  );
};

export default Filter;
