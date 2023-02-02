FILE 1: crypto.h  
#ifndef CRYPTO_H #define CRYPTO_H  #include <string> #include <vector> #include <cstdint>  #include <cryptopp/sha.h> #include <cryptopp/ripemd.h>  namespace Crypto {  using Byte = uint8_t; using Bytes = std::vector<Byte>;  
// --------------- 
// Cryptography 
// ---------------  
// Hashes  
Bytes sha256_hash(const Bytes& data); Bytes ripemd160_hash(const Bytes& data);  
// Encryption  
Bytes aes_encrypt(const Bytes& plaintext, const Bytes& key); Bytes aes_decrypt(const Bytes& ciphertext, const Bytes& key);  
// Key Generation  
Bytes generate_aes_key(const Bytes& seed); Bytes generate_private_key(const Bytes& seed);  
// Signing  
Bytes ecdsa_sign(const Bytes& data, const Bytes& private_key); Bytes ecdsa_verify(const Bytes& data, const Bytes& signature, const Bytes& public_key);  
// --------------- 
// Monero/Zcash 
// ---------------  
// Address Generation  
std::string generate_monero_address(const Bytes& public_key); std::string generate_zcash_address(const Bytes& public_key);  
// Transaction Data  
Bytes generate_monero_tx_data(const Bytes& sender_public_key, const Bytes& recipient_public_key, uint64_t amount); Bytes generate_zcash_tx_data(const Bytes& sender_public_key, const Bytes& recipient_public_key, uint64_t amount);  
// Signature Generation  
Bytes generate_monero_signature(const Bytes& tx_data, const Bytes& private_key); Bytes generate_zcash_signature(const Bytes& tx_data, const Bytes& private_key);  } 
// 
namespace Crypto  #endif 
// CRYPTO_H  
// 