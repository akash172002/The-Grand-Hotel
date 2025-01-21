import Button from "../../ui/Button";

import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

// function AddCabin() {
//   const [iOpenModal, setIOpenModal] = useState(false);
//   return (
//     <div>
//       <Button onClick={() => setIOpenModal((show) => !show)}>
//         Add new cabin
//       </Button>
//       {iOpenModal && (
//         <Modal onClose={() => setIOpenModal(false)}>
//           <CreateCabinForm onClose={() => setIOpenModal(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }

export default AddCabin;
