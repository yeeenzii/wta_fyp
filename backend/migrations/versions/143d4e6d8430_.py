"""empty message

Revision ID: 143d4e6d8430
Revises: ad5c3dd651f2
Create Date: 2024-04-22 06:10:08.769893

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '143d4e6d8430'
down_revision = 'ad5c3dd651f2'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('verifications',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('filename', sa.String(length=80), nullable=False),
    sa.Column('audio', sa.BLOB(), nullable=False),
    sa.Column('sgram', sa.BLOB(), nullable=False),
    sa.PrimaryKeyConstraint('id')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('verifications')
    # ### end Alembic commands ###
