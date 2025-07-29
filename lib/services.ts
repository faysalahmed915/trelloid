import { createClient } from "@/lib/supabase/client"


const supabase = createClient();

export const boardService = {
    async getBoards() {
        const { data, error } = await supabase.from("boards").select("*").order("created_at", { ascending: false });
        if (error) throw error;
        return data;
    },

    async createBoard(title: string, description: string | null, color: string) {
        const { data, error } = await supabase
            .from("boards")
            .insert({ title, description, color })
            .select("*")
            .single();
        if (error) throw error;
        return data;
    },

    async updateBoard(id: string, updates: Partial<{ title: string; description: string; color: string }>) {
        const { data, error } = await supabase
            .from("boards")
            .update(updates)
            .eq("id", id)
            .select("*")
            .single();
        if (error) throw error;
        return data;
    },

    async deleteBoard(id: string) {
        const { error } = await supabase.from("boards").delete().eq("id", id);
        if (error) throw error;
    },
}