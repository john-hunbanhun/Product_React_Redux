import { FirebaseTimestamp, db } from "../../firebase";
import { push } from "connected-react-router";

const productsRef = db.collection("products");

export const saveProduct = (
  id,
  name,
  description,
  category,
  gender,
  price,
  image,
  sizes
) => {
  return async (dispatch) => {
    const timestamp = FirebaseTimestamp.now();

    const data = {
      id: id,
      category: category,
      description: description,
      gender: gender,
      name: name,
      price: parseInt(price, 10),
      image: image,
      sizes: sizes,
      updated_at: timestamp,
    };
    if (id === "") {
      const ref = productsRef.doc();
      id = ref.id;
      data.id = id;
      data.created_at = timestamp;
    }
    return productsRef
      .doc(id)
      .set(data, { merge: true })
      .then(() => {
        dispatch(push("/"));
      })
      .catch((error) => {
        throw new Error(error);
      });
  };
};
