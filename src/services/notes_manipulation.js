import axios from "axios";
import { showErrorToast, showToast } from "../components/toast";
import { data } from "autoprefixer";

class Notes {
  static NotesApi;

  constructor() {
    this.NotesApi = axios.create({
      baseURL: "http://localhost:3000/user",
    });

    this.NotesApi.interceptors.request.use(
      (config) => {
       
        const accessToken = localStorage.getItem('token');

        if (accessToken) {
          if (config.headers) config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => {
        if (error.response && error.response.data && error.response.data.message) {
          showErrorToast(error.response.data.message);
          console.error(error.response.data.message);
        } else {
          showErrorToast(`Error: ${error.message}`);
        }
        console.error("Error:", error.message);
        return Promise.reject(error);
      }
    );

    this.NotesApi.interceptors.response.use(
      (response) => {
        if (response.data.message) {
          showToast(response.data.message);
        }
        return response;
      },
      (error) => {
        if (error.response && error.response.data && error.response.data.message) {
          showErrorToast(error.response.data.message);
          console.error(error.response.data.message);
        } else {
          showErrorToast(`Server Error: ${error.message}`);
        }
        console.error("Server Error:", error.message);
        return Promise.reject(error);
      }
    );
  }

  async getNotes() {
    try {
      const response = await this.NotesApi.get("/get_notes");
      if (response.status >= 200 && response.status < 300) {
        return response.data;
      } else {
        throw new Error(`Error fetching notes: ${response.status} - ${response.data}`);
      }
    } catch (e) {
      console.error(e);
      throw e;
    }
  }

  async addNote(title, content) {
    try {
      const response = await this.NotesApi.post("add_note",{
        title: title,
        content: content,
      });

      if (response.status == 200) {
        return response.data.data;
      } else {
        console.error(response.data);
        return "";
      }
    } catch (e) {
      console.error(e.message);
      return "";
    }
  }

  async updateNote(note) {

    try {
      const response = await this.NotesApi.post("update_note", {
        _id: note._id,
        title: note.title,
        content: note.content,
      });

      if (response.status == 200) {
        return true;
      } else {
        console.error(response.data);
        return false;
      }
    } catch (e) {
      console.error(e.message);
      return false;
    }
  }

  async deleteNote(noteId) {
    try {
      console.log(noteId);
      const response = await this.NotesApi.delete("delete_note", {
        data: {
          _id: noteId,
        },
      });

      if (response.status == 200) {
        return true;
      } else {
        return false;
      }
    } catch (e) {
      console.error(e.message);
      return false;
    }
  }
}

export default Notes;
