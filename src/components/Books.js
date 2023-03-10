import PropTypes from 'prop-types';
import Form from './Form';
import Book from './Book';

const Books = ({ props }) => (
  <div className=" w-full flex flex-col gap-5 bg-[#fafafa] py-10  ">
    <div className="flex flex-col gap-5 w-full">
      {props.map((item) => (
        <Book key={item.item_id} item={item} />
      ))}
    </div>
    <br />
    <Form />
  </div>
);

Books.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      item_id: PropTypes.string.isRequired,
      // add more properties here as needed
    }).isRequired,
  ).isRequired,
  map: PropTypes.func.isRequired,
};

export default Books;
