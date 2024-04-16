import Api from "./api_interceptor";

class Notes extends Api{
  
  async getNotes() {
    try {
      const response = await this.Api.get("/api/notes");
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
      const response = await this.Api.post("/api/notes",{
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
      const response = await this.Api.put("/api/notes", {
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
      const response = await this.Api.delete(`/api/notes?id=${noteId}`);
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
