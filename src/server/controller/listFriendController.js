import { FriendListService } from "../../services/listFriendsService.js";

export class FriendListController {
    static async getFriends(req, res) {
        const { contactId } = req.params;

        if (!contactId) {
            return res
                .status(400)
                .json({ error: "O ID do usuário é obrigatório." });
        }

        if (typeof contactId !== "string") {
            return res
                .status(400)
                .json({ error: "O ID do usuário deve ser uma string (UUID)." });
        }

        try {
            const friends = await FriendListService.listFriends(contactId); // Passa o UUID diretamente
            return res.status(200).json(friends);
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
}
