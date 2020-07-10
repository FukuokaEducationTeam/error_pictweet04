class Tweet < ApplicationRecord
  belongs_to :user
  has_many :comments               #commentsテーブルとのアソシエーション

  validates :text, presence: true

  def self.search(search)
    return Tweet.all unless search
    Tweet.where('text LIKE(?)', "%#{search}%")
  end
end
