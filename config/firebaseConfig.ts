import admin from "firebase-admin";
import path from "path";

const serviceAccountPath = path.resolve(__dirname, "../../serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccountPath),
});

const db = admin.firestore();

export { db, admin };
