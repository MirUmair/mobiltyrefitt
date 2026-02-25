import React, { useState } from "react";
import StarRatingInput from "./StarRatingInput";

// Type for reviews
interface Review {
  id: string;
  name?: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export default function ReviewsBlock() {
  // Local state instead of Redux
  const [items, setItems] = useState<Review[]>([]);
  const [name, setName] = useState("");
  const [rating, setRating] = useState<number>(5);
  const [comment, setComment] = useState("");

  const avg =
    items.length > 0
      ? items.reduce((a, b) => a + b.rating, 0) / items.length
      : 0;

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!comment.trim()) return;

    const newReview: Review = {
      id: crypto.randomUUID(),
      name: name.trim() || "Anonymous",
      rating,
      comment: comment.trim(),
      createdAt: new Date().toISOString(),
    };

    setItems([newReview, ...items]);

    // Reset form
    setName("");
    setRating(5);
    setComment("");
  }

  return (
    <section className="space-y-4">
      <div className="flex items-end justify-between">
        <div>
          <h2 className="text-lg font-semibold">Customer Reviews</h2>
          <div className="text-sm text-slate-600">
            {items.length} review{items.length !== 1 ? "s" : ""} · Average{" "}
            {(Math.round(avg * 10) / 10 || 0)}/5
          </div>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* LEFT: Form */}
        <form
          onSubmit={submit}
          className="glass rounded-2xl p-4 space-y-3 border border-slate-200"
        >
          <div className="font-medium">Leave a review</div>

          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name (optional)"
            className="border rounded-xl px-3 py-2 w-full"
          />

          <div>
            <div className="text-sm text-slate-600 mb-1">Your rating</div>
            <StarRatingInput value={rating} onChange={setRating} />
          </div>

          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            placeholder="Share your experience…"
            className="border rounded-xl px-3 py-2 w-full"
            rows={5}
          />

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-4 py-2 font-medium"
          >
            Submit review
          </button>
        </form>

        {/* RIGHT: Reviews list */}
        <div className="space-y-3 max-h-[420px] overflow-auto pr-1">
          {items.map((r) => (
            <div
              key={r.id}
              className="glass rounded-2xl p-4 border border-slate-200"
            >
              <div className="flex items-center justify-between">
                <div className="font-medium">{r.name}</div>
                <div className="text-xs text-slate-500">
                  {new Date(r.createdAt).toLocaleDateString()}
                </div>
              </div>

              {/* Stars */}
              <div className="mt-1 flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg
                    key={i}
                    viewBox="0 0 20 20"
                    className={
                      i < r.rating
                        ? "w-4 h-4 fill-yellow-400"
                        : "w-4 h-4 fill-slate-300"
                    }
                  >
                    <path d="M10 1.5l2.7 5.48 6.05.88-4.38 4.26 1.04 6.05L10 15.9l-5.4 2.27 1.04-6.05L1.26 7.86l6.05-.88L10 1.5z" />
                  </svg>
                ))}
              </div>

              <p className="mt-2 text-slate-700 text-sm whitespace-pre-wrap">
                {r.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
