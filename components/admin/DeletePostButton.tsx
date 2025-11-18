'use client'

type DeletePostButtonProps = {
    deleteAction: () => Promise<void>
}

export function DeletePostButton({ deleteAction }: DeletePostButtonProps) {
    async function handleDelete() {
        if (confirm('この記事を削除してもよろしいですか？')) {
            await deleteAction()
        }
    }

    return (
        <button
            type="button"
            onClick={handleDelete}
            className="rounded-lg bg-red-600 px-6 py-2 text-white hover:bg-red-700"
        >
            削除
        </button>
    )
}
