import { db } from './firebase';
import {
  query,
  collection,
  where,
  getDocs,
 } from 'firebase/firestore';


export const listarTodo = async (autor) => {
  const collection_ref = collection(db, "todos");
  const q = query(collection_ref, where("autor", "==", autor));
  const doc_refs = await getDocs(q);
  const retorno = [];
  doc_refs.forEach(data => {
    retorno.push({id: data.id, ...data.data()});
  });
  return retorno;
}
